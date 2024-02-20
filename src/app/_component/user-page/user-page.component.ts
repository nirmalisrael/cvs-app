import { Component } from '@angular/core';
import { Candidate } from 'src/app/_module/election/_dto/candidate';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  elctionNames: string[] = ["Election 1", "Election 1", "Election 1"];

  showSelectElection = true;

  showVotingPage = false;

  selectedCandidateId?: string;

  candidate: Candidate = {
    candidateId: "LCVSS01", candidateName: "Nirmal", candidateDeptNo: "21UCS14"
  }

  candidates: Candidate[] = [
    {candidateId: 'LCVFA01', candidateDeptNo: '21UCS20', candidateName: 'Vetri Piriyan'},
    {candidateId: 'LCVFA02', candidateDeptNo: '21UCS21', candidateName: 'Nirmal'},
    {candidateId: 'LCVFA03', candidateDeptNo: '21UCS33', candidateName: 'Santhosh'},
    {candidateId: 'LCVFA04', candidateDeptNo: '21UCS45', candidateName: 'Maria Raj'},
  ];

  onSelectCandidateId(candidateId: string | undefined) {
    console.log(this.selectedCandidateId);
  }
}
