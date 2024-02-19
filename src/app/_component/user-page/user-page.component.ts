import { Component } from '@angular/core';
import { Candidate } from 'src/app/_module/election/_dto/candidate';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  elctionNames: string[] = ["Election 1", "Election 1", "Election 1"];

  showSelectElection = false;

  showVotingPage = true;

  candidate: Candidate = {
    candidateId: "LCVSS01", candidateName: "Nirmal", candidateDeptNo: "21UCS14"
  }
}
