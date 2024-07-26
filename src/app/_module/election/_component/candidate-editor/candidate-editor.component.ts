import { Component, OnInit } from '@angular/core';
import { Candidate } from '../../_dto/candidate';
import Swal from 'sweetalert2';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { ElectionService } from '../../_service/election.service';
import { AuthService } from 'src/app/_module/auth/_service/jwt-service/auth.service';
import { CandidateService } from '../../_service/candidate.service';

@Component({
  selector: 'app-candidate-editor',
  templateUrl: './candidate-editor.component.html',
  styleUrls: ['./candidate-editor.component.css']
})
export class CandidateEditorComponent implements OnInit{

  constructor(private electionService: ElectionService, public authService: AuthService, private candidateService: CandidateService) {}

  showCandidatePage = true;
  showAddCandidateForm = false;
  showModifyCandidateForm = false;

  electionNames?: string[];
  selectedElection?: string;

  newCandidate: Candidate = new Candidate();
  
  candidates: Candidate[] = [];

  ngOnInit(): void {
    this.electionService.selectedElection$.subscribe(selectedElection => {
      this.selectedElection = selectedElection;
    });  
    this.getCandidatesByElection(this.selectedElection);
    this.electionNames = this.candidateService.getElectionNames();
    this.getCandidatesByElection(this.selectedElection);
  }

  openModifyCandidateForm(candidate: Candidate) {
  }

  openDeleteCandidate(candidateId: string | undefined) {
    Swal.fire({
      html: 'Are you sure you want to remove Candidate ' + candidateId + '?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      confirmButtonColor: 'red',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted',
          candidateId + ' Candidate removed Successfully!',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', candidateId + ' Candidate details are safe!', 'error');
      }
    });
  }

  openAddCandidateForm() {
    this.showCandidatePage = false;
    this.showAddCandidateForm = true;
  }

  saveCandidate(newCandidate: Candidate) {
    
    if (newCandidate && this.selectedElection) {
      newCandidate.electionName = this.selectedElection;
      this.candidateService.createCandidate(newCandidate).subscribe(
        (response) => {
          newCandidate = response;
          console.log(response);
          
          this.candidates.push(newCandidate);
          this.closeAddCandidateForm();
          Swal.fire("Added", newCandidate.candidateId + " Candidate Added Successfully in "+newCandidate.electionName, 'success');
        }
      )
    }
  }

  closeAddCandidateForm () {
    this.showAddCandidateForm = false;
    this.showModifyCandidateForm = false;
    this.showCandidatePage = true;
    this.getCandidatesByElection(this.selectedElection);
  }

  getCandidateById(candidateId: string) {
    if (candidateId) {
      this.candidateService.getCandidateById(candidateId).subscribe(
        (response) => {
          if (response) {
            this.candidates = [];
            this.candidates.push(response);
          }
        }
      )
    }
  }

  onSelectOption(event: Event): void {
    const electionName = (event.target as HTMLSelectElement).value;
    this.getCandidatesByElection(electionName);
  }

  getCandidatesByElection(electionName: string | undefined) {
    console.log(electionName);
    
    if (electionName) {
      this.candidateService.getCandidatesByElectionName(electionName).subscribe(
        (response) => {
          this.candidates = response;
          console.log(this.candidates);
          
        }
      )
    }
  }
}