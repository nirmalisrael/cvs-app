import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/_module/election/_dto/candidate';
import Swal from 'sweetalert2';
import { StudentService } from '../../_service/student.service';
import { AuthService } from 'src/app/_module/auth/_service/jwt-service/auth.service';
import { StudentResponse } from '../../_dto/student-response';
import { ElectionService } from 'src/app/_module/election/_service/election.service';
import { ElectionStatus } from 'src/app/_module/election/_dto/election-status';
import { Election } from 'src/app/_module/election/_dto/election';
import { CandidateService } from 'src/app/_module/election/_service/candidate.service';
import { VoteService } from 'src/app/_module/vote/_service/vote.service';
import { Vote } from 'src/app/_module/vote/_dto/vote';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit{

  constructor(public studentService: StudentService, private electionService: ElectionService, 
    private candidateService: CandidateService,
    private voteService: VoteService) {}

  elctionNames: string[] = ["Election 1", "Election 2", "Election 3"];

  showSelectElection = true;

  showVotingPage = false;

  selectedCandidateId?: string;

  selectedElection?: string;

  username?: string | null;

  hasVoted: boolean = false;

  studentResponse: StudentResponse = new StudentResponse();

  candidate: Candidate = {
    candidateId: "LCVSS01", candidateName: "Nirmal", deptNo: "21UCS14"
  }

  elections: Election[] = [];

  candidates: Candidate[] = [
  ];

  ngOnInit(): void {
    this.hasVoted = false;
    this.username = localStorage.getItem('username');
    this.getStudentByDeptNo();
    this.getElectionsByElectionStatus(ElectionStatus.LIVE);
  }
  onSelectCandidateId() {
    console.log(this.selectedCandidateId);
  }

  onSelectElection() {
    if(this.selectedElection) {
      this.showSelectElection = false;
      this.showVotingPage = true;
      if (this.studentResponse.deptNo && this.selectedElection) {
        this.studentService.hasVoted(this.studentResponse.deptNo, this.selectedElection).subscribe(
          (reponse) => {
            console.log(reponse);
            
            this.hasVoted = JSON.parse(reponse.candidateId);
            this.selectedCandidateId = reponse.candidateId;
          }
        )
      }
      this.candidateService.getCandidatesByElectionName(this.selectedElection).subscribe(
        (response) => {          
          this.candidates = response;
        }
      )
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
          const vote: Vote = new Vote();
          vote.candidateId = this.selectedCandidateId;
          vote.electionName = this.selectedElection;
          vote.deptNo = this.studentResponse.deptNo;
          console.log(vote);
          
          this.voteService.castVote(vote).subscribe(
            (reponse) => {
              if(reponse) {
                this.hasVoted = true;
                Swal.fire(
                  'Voted',
                  'Voted successfully for '+ this.selectedCandidateId,
                  'success'
                );
              }
            }
          )          
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          
        }
      });
    }
  }

  getStudentByDeptNo() {

    console.log(this.username);
    
    if (this.username && this.username != '') {
      this.studentService.getStudentById(this.username).subscribe(
        (response) => {
          this.studentResponse = response;     
        }
      )
    }
  }

  getElectionsByElectionStatus(electionStatus: ElectionStatus) {
    console.log("method called succes");
    
    this.electionService.getElectionsByElectionStatus(electionStatus).subscribe(
      (response) => {
        console.log(response);
        
        this.elctionNames = response.map(election => election.electionName);
        console.log(this.elctionNames);
        
      }
    )
  }

}
