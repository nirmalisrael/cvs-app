import { Component } from '@angular/core';
import { Candidate } from 'src/app/_module/election/_dto/candidate';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  elctionNames: string[] = ["Election 1", "Election 2", "Election 3"];

  showSelectElection = true;

  showVotingPage = false;

  selectedCandidateId?: string;

  selectedElection?: string;

  hasVoted: boolean = false;

  candidate: Candidate = {
    candidateId: "LCVSS01", candidateName: "Nirmal", deptNo: "21UCS14"
  }

  candidates: Candidate[] = [
    {candidateId: 'LCVFA01', deptNo: '21UCS20', candidateName: 'Vetri Piriyan'},
    {candidateId: 'LCVFA02', deptNo: '21UCS21', candidateName: 'Nirmal'},
    {candidateId: 'LCVFA03', deptNo: '21UCS37', candidateName: 'julius'},
    {candidateId: 'LCVFA04', deptNo: '21UCS45', candidateName: 'Maria Raj'},
  ];

  onSelectCandidateId() {
    console.log(this.selectedCandidateId);
  }

  onSelectElection() {
    if(this.selectedElection) {
      this.showSelectElection = false;
      this.showVotingPage = true;
    }
  }
  
  onClickBackButton() {
    this.showSelectElection = !this.showSelectElection;
    this.showVotingPage = !this.showVotingPage;
  }

  onClickVote() {
    console.log(this.selectedElection, this.selectedCandidateId);
    if(this.selectedElection !== undefined && this.selectedCandidateId !== undefined) {
      Swal.fire({
        html: 'Are you sure you want to vote for ' + this.selectedCandidateId + ' in ' + this.selectedElection,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Vote',
        // confirmButtonColor: 'red',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.value) {
          //call delete method in service
          this.hasVoted = true;
          Swal.fire(
            'Voted',
            'Voted successfully for '+ this.selectedCandidateId,
            'success'
          );
          
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          
        }
      });
    }
  }

}
