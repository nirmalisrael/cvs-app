import { Component, OnInit } from '@angular/core';
import { Election } from '../../_dto/election';
import { ElectionStatus } from '../../_dto/election-status';
import { Candidate } from '../../_dto/candidate';
import { animate, state, style, transition, trigger } from '@angular/animations';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ElectionService } from '../../_service/election.service';
import { AuthService } from 'src/app/_module/auth/_service/jwt-service/auth.service';
import { DatePipe } from '@angular/common';
import { CandidateService } from '../../_service/candidate.service';

@Component({
  selector: 'app-election-editor',
  templateUrl: './election-editor.component.html',
  styleUrls: ['./election-editor.component.css'],
  animations: [trigger('formAnimation', [
    state('initial', style({ transform: 'translateX(0)' })),
    state('movedLeft', style({ transform: 'translateX(-60%)' })),
    state('movedRight', style({ transform: 'translateX(100%)' })),
    transition('initial => movedLeft', animate('500ms ease-out')),
    transition('initial => movedRight', animate('500ms ease-out')),
    transition('movedLeft => initial', animate('500ms ease-in')),
    transition('movedRight => initial', animate('500ms ease-in'))
  ])]
})
export class ElectionEditorComponent implements OnInit{

  constructor(private router: Router, private electionService: ElectionService, 
    public authService: AuthService, private candidateService: CandidateService) { }

  showElectionPage = true;
  showAddedCandidates = false;
  showAddElectionPage = false;
  showModifyElectionForm = false;
  showAddCandidateForm = false;

  formAnimationState = 'initial';
  selectedDate: string | null = '';
  selectedTime: string | null = '';

  electionNames?: string[];

  // electionName: string = '';

  modifyElection: Election = new Election();
  newCandidate: Candidate = new Candidate();
  newElection: Election = new Election();

  elections: Election[] = [];

  candidates: Candidate[] = [];

  statusOptions: string[] = [];

  ngOnInit() {
    this.populateStatusOptions();
    this.getAllElections();
  }

  private populateStatusOptions() {
    this.statusOptions = Object.values(ElectionStatus);
  }

  removeCandidate(index: number) {
    if (index !== -1) {
      this.candidates.splice(index, 1);
    }
    if (this.candidates.length === 0) {
      this.showAddedCandidates = false;
    }
  }

  toggleAddCandidateForm() {
    if (!this.showAddCandidateForm) {
      this.formAnimationState = 'movedLeft';
      this.showAddCandidateForm = true;
    } else {
      this.formAnimationState = 'movedRight';
      setTimeout(() => {
        this.showAddCandidateForm = false;
        this.formAnimationState = 'initial';
      }, 500);
    }
    if (this.candidates.length > 0) {
      this.showAddedCandidates = true;
    }
  }

  closeAddElection() {
    this.showAddElectionPage = false;
    this.showModifyElectionForm = false;
    this.showElectionPage = true;
    this.getAllElections();
  }

  getTimeFromDate(date?: Date): string | null{
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(date, 'HH:mm'); 
  }
  openAddElectionPage() {
    this.showElectionPage = false;
    this.showAddElectionPage = true;
  }

  openDeleteElection(electionName: string) {
    Swal.fire({
      html: 'Are you sure you want to delete ' + electionName,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      confirmButtonColor: 'red',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        //call delete method in service
        this.electionService.removeElection(electionName).subscribe(
          (response) => {
            const deleteResponse = response.message;
            if (deleteResponse) {
              Swal.fire(
                'Deleted',
                deleteResponse + ' Deleted Successfully!',
                'success'
              );
              this.getAllElections();
            }
          }
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', electionName + ' details are safe!', 'error');
      }
    });
  }

  addCandidates(candidateId: string, deptNo: string, electionName: string) {
    const candidate = new Candidate();
    candidate.candidateId = candidateId;
    candidate.deptNo = deptNo;
    candidate.electionName = electionName;
    this.candidates.push(candidate);
    if (this.candidates.length !== 0) {
      this.showAddedCandidates = true;
    }
  }

  saveElection(election: Election, newCandidates: Candidate[]) {
    if (election.electionName !== undefined && this.selectedDate !== '' && this.selectedTime !== '' && election.durationHours !== undefined) {
      const electionDateTime = this.selectedDate + ' ' +this.selectedTime;
      this.electionService.createElection(election.electionName, electionDateTime, election.durationHours).subscribe(
        (response) => {
          election = response;
          if (response) {
            if (election.electionName) {
              this.candidateService.createCandidates(this.candidates).subscribe(
                (response) => {
                  if (response) {
                    Swal.fire('Created', election.electionName + ' Created successfully! & ' + response.length + ' Candidates Added!', 'success');

                  }
                }
              )
            }
            this.closeAddElection();
          }
        }
      )
    }
  }

  openModifyElectionForm(election: Election) {
    this.modifyElection = election;
    this.showElectionPage = false;
    this.showModifyElectionForm = true;
    console.log(this.modifyElection.startTime);
    const datePipe = new DatePipe('en-US');
    this.selectedDate = datePipe.transform(this.modifyElection.startTime, 'yyyy-MM-dd');
    this.selectedTime = datePipe.transform(this.modifyElection.startTime, 'HH:mm');    
  }

  saveModifiedElection() {
      
    if (this.modifyElection .electionName !== undefined && this.selectedDate !== '' && this.selectedTime !== '' && this.modifyElection.durationHours !== undefined) {
      const electionDateTime = this.selectedDate + ' ' +this.selectedTime;
      console.log(electionDateTime);
      
      this.electionService.modifyElection(this.modifyElection.electionName, electionDateTime, this.modifyElection.durationHours).subscribe(
        (response) => {
          this.modifyElection = response;
          if (response) {
            Swal.fire('Updated', this.modifyElection.electionName + ' Updated successfully!', 'success');
            this.closeAddElection();
          }
        }
      )
    }
  }

  findElectionByName(electionName: string) {
    if (electionName !== '' && electionName !== undefined) {
      this.electionService.getElectionByName(electionName).subscribe(
        (response) => {
          if(response) {
            this.elections = [];
            this.elections.push(response);
          }
        }
      )
    }    
  }

  getAllElections() {
    this.electionService.getAllElections().subscribe(
      (response) => {
        this.elections = response;
        this.electionNames = this.elections.map(election => election.electionName);    
        this.candidateService.setElectionNames(this.electionNames);
        console.log(response);
            
      },
      (error) => {
        console.log(error);
      }
    )
  }

  onClickViewCandidates(electionName: string) {
    this.electionService.setSelectedElection(electionName);
    this.router.navigate(['/admin-page/candidate-editor']);
  }

  isValidElectionStatus(status: string): status is keyof typeof ElectionStatus {
    return Object.keys(ElectionStatus).includes(status);
  }

  onSelectElectionStatus(event: Event) {
    const selectedElectionStatus = (event.target as HTMLSelectElement).value;
    this.getElectionsByElectionStatus(selectedElectionStatus);
  }
  
  getElectionsByElectionStatus(status: string) {
    if (this.isValidElectionStatus(status)) {
      const electionStatus: ElectionStatus = ElectionStatus[status as keyof typeof ElectionStatus];
      if (electionStatus == ElectionStatus.ALL) {
        this.getAllElections();
      } else {
        this.electionService.getElectionsByElectionStatus(electionStatus).subscribe(
          (response) => {
            this.elections = response;
          }
        )
      }
      
    }
  }
}
