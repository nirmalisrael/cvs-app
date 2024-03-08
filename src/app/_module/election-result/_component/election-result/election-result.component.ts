import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_module/auth/_service/jwt-service/auth.service';
import { Candidate } from 'src/app/_module/election/_dto/candidate';
import { Election } from 'src/app/_module/election/_dto/election';
import { ElectionStatus } from 'src/app/_module/election/_dto/election-status';
import { CandidateService } from 'src/app/_module/election/_service/candidate.service';
import { ElectionService } from 'src/app/_module/election/_service/election.service';
import { VoteService } from 'src/app/_module/vote/_service/vote.service';

@Component({
  selector: 'app-election-result',
  templateUrl: './election-result.component.html',
  styleUrls: ['./election-result.component.css']
})
export class ElectionResultComponent implements OnInit{

  constructor(public authService: AuthService,
    private electionService: ElectionService,
    private voteService: VoteService,
    private candidateService: CandidateService) {}
  
  statusOptions = Object.values(ElectionStatus);
  selectedElection?: string;

  showElectionPage = true;
  showCandidatePage = false;

  electionNames: string[] = [];

  elections: Election[] = [
  ];
    
  candidates: Candidate[] = [
  ];

  ngOnInit(): void {
    this.getAllElections();
  }

  getWinnerByElectionName(electionName: string | undefined): string {
    return 'LCVCM01';
  }

  onSelectOption(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.getResultByElection(selectedValue);
  }
  onSelectElectionStatus(event: Event) {
    const selectedElectionStatus = (event.target as HTMLSelectElement).value;
    this.getElectionsByElectionStatus(selectedElectionStatus);
  }

  filterElection(selectedValue: string): void {
    // Your filtering logic here based on the selected option
    console.log('Selected Option:', selectedValue);
  }

  getResultByElection(electionName: string) {
    this.selectedElection = electionName;
    if (electionName) {
      this.candidateService.getCandidatesByElectionName(electionName).subscribe(
        (response) => {
          this.candidates = response;
          this.showElectionPage = false;
          this.showCandidatePage = true;
        }
      )
    }
  }

  isValidElectionStatus(status: string): status is keyof typeof ElectionStatus {
    return Object.keys(ElectionStatus).includes(status);
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
        this.electionNames = this.elections.map(electon => electon.electionName);
      }
    )
  }

  backToElectionResult() {
    this.showCandidatePage = false;
    this.showElectionPage = true; 
  }

  getTimeFromDate(date?: Date): string | null{
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(date, 'HH:mm');
  }
}
