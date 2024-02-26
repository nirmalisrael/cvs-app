import { Component } from '@angular/core';
import { AuthService } from 'src/app/_module/auth/_service/jwt-service/auth.service';
import { Candidate } from 'src/app/_module/election/_dto/candidate';
import { Election } from 'src/app/_module/election/_dto/election';
import { ElectionStatus } from 'src/app/_module/election/_dto/election-status';

@Component({
  selector: 'app-election-result',
  templateUrl: './election-result.component.html',
  styleUrls: ['./election-result.component.css']
})
export class ElectionResultComponent {

  constructor(public authService: AuthService) {}
  
  statusOptions = Object.values(ElectionStatus);
  selectedElection?: string;

  showElectionPage = false;
  showCandidatePage = true;

  electionNames: string[] = ['Fine Arts Secretary','Sports Secretary','Media Secretary'];

  elections: Election[] = [
    {electionName: 'Fine Arts Secretary', electionDate: new Date('2024-01-20'), electionStatus: ElectionStatus.LIVE},
    {electionName: 'Sports Secretary', electionDate: new Date('2024-01-20'), electionStatus: ElectionStatus.COMPLETED},
    {electionName: 'Chair Man', electionDate: new Date('2024-01-20'), electionStatus: ElectionStatus.UPCOMMING},
    {electionName: 'Media Secretary', electionDate: new Date('2024-01-20'), electionStatus: ElectionStatus.LIVE}
  ];
    
  candidates: Candidate[] = [
    {candidateId: 'LCVFA01', candidateDeptNo: '21UCS20', candidateName: 'Vetri Piriyan', voteCount: 0},
    {candidateId: 'LCVFA02', candidateDeptNo: '21UCS21', candidateName: 'Nirmal', voteCount: 0},
    {candidateId: 'LCVFA03', candidateDeptNo: '21UCS33', candidateName: 'Santhosh', voteCount: 0},
    {candidateId: 'LCVFA04', candidateDeptNo: '21UCS45', candidateName: 'Maria Raj', voteCount: 0},
  ];

  getWinnerByElectionName(electionName: string | undefined): string {
    return 'LCVCM01';
  }

  onSelectOption(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    // Call your method here with the selected option
    this.filterElection(selectedValue);
  }

  filterElection(selectedValue: string): void {
    // Your filtering logic here based on the selected option
    console.log('Selected Option:', selectedValue);
  }

  getResultByElection(electionName: string) {
    this.selectedElection = electionName;
    this.showElectionPage = false;
    this.showCandidatePage = true;
  }

  backToElectionResult() {
    this.showCandidatePage = false;
    this.showElectionPage = true; 
  }
}
