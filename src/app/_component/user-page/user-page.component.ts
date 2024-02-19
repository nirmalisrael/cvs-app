import { Component } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  elctionNames: string[] = ["Election 1", "Election 1", "Election 1"];

  showSelectElection = false;

  showVotingPage = true;
}
