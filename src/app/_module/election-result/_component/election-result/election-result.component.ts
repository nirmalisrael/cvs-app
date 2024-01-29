import { Component } from '@angular/core';
import { Election } from 'src/app/_module/election/_dto/election';
import { ElectionStatus } from 'src/app/_module/election/_dto/election-status';

@Component({
  selector: 'app-election-result',
  templateUrl: './election-result.component.html',
  styleUrls: ['./election-result.component.css']
})
export class ElectionResultComponent {

  statusOptions = Object.values(ElectionStatus);

  elections: Election[] = [
    {electionName: 'Fine Arts Secretary', electionDate: new Date('2024-01-20'), electionStatus: ElectionStatus.LIVE},
    {electionName: 'Sports Secretary', electionDate: new Date('2024-01-20'), electionStatus: ElectionStatus.COMPLETED},
    {electionName: 'Chair Man', electionDate: new Date('2024-01-20'), electionStatus: ElectionStatus.UPCOMMING},
    {electionName: 'Media Secretary', electionDate: new Date('2024-01-20'), electionStatus: ElectionStatus.LIVE}
  ];

  getWinnerByElectionName(electionName: string | undefined): string {
    return 'LCVCM01';
  }
}
