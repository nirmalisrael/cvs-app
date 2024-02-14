import { Component } from '@angular/core';
import { Election } from '../../_dto/election';
import { ElectionStatus } from '../../_dto/election-status';
import { Candidate } from '../../_dto/candidate';
import { animate, state, style, transition, trigger } from '@angular/animations';
import Swal from 'sweetalert2';
import { CandidateEditorComponent } from '../candidate-editor/candidate-editor.component';
import { Router } from '@angular/router';
import { ElectionService } from '../../_service/election.service';

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
export class ElectionEditorComponent {

  constructor(private router: Router, private electionService: ElectionService) { }

  showElectionPage = true;
  showAddedCandidates = false;
  showAddElectionPage = false;
  showModifyElectionForm = false;
  showAddCandidateForm = false;

  formAnimationState = 'initial';

  // electionName: string = '';

  modifyElection: Election = new Election();
  newCandidate: Candidate = new Candidate();
  newElection: Election = new Election();

  elections: Election[] = [
    { electionName: 'Fine Arts Secretary', electionDate: new Date('2024-01-20'), electionStatus: ElectionStatus.LIVE },
    { electionName: 'Sports Secretary', electionDate: new Date('2024-01-20'), electionStatus: ElectionStatus.COMPLETED },
    { electionName: 'Chair Man', electionDate: new Date('2024-01-20'), electionStatus: ElectionStatus.UPCOMMING },
    { electionName: 'Media Secretary', electionDate: new Date('2024-01-20'), electionStatus: ElectionStatus.LIVE }
  ];

  candidates: Candidate[] = [
    {candidateId: 'LCVPM01', candidateDeptNo: '21UCS01', electionName: 'Chair Man'},
    {candidateId: 'LCVPM02', candidateDeptNo: '21UCS02', electionName: 'Chair Man'},
    {candidateId: 'LCVPM03', candidateDeptNo: '21UCS03', electionName: 'Chair Man'},
    {candidateId: 'LCVPM04', candidateDeptNo: '21UCS04', electionName: 'Chair Man'},
  ];

  statusOptions: string[] = [];

  // candidateComponent: CandidateEditorComponent = new CandidateEditorComponent;

  ngOnInit() {
    this.populateStatusOptions();
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
  }

  openAddElectionPage() {
    this.showElectionPage = false;
    this.showAddElectionPage = true;
  }

  openModifyElectionForm(election: Election) {
    this.showElectionPage = false;
    this.showModifyElectionForm = true;
    this.modifyElection = election;
  }
  openDeleteElection(electionName: string | undefined) {
    Swal.fire({
      html: 'Are you sure you want to delete ' + electionName + ' Election',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      confirmButtonColor: 'red',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        //call delete method in service
        Swal.fire(
          'Deleted',
          electionName + ' Election Deleted Successfully!',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', electionName + ' Election details are safe!', 'error');
      }
    });
  }

  addCandidates(candidate: Candidate) {
    this.candidates.push(candidate);
    if (this.candidates.length !== 0) {
      this.showAddedCandidates = true;
    }
  }

  saveElection(election: Election, newCandidates: Candidate[]) {
    Swal.fire('Saved', election.electionName + ' Election created successfully!', 'success');
  }

  onClickViewCandidates(electionName: string) {
    this.electionService.setSelectedElection(electionName);
    this.router.navigate(['/admin-page/candidate-editor']);
    // console.log(electionName);
    
  }
}
