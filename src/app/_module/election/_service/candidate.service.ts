import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidate } from '../_dto/candidate';
import { Observable } from 'rxjs';
import { Url } from 'src/app/_dto/url';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http: HttpClient) { }

  private electionNames?: string[];

  createCandidate(candidateDTO: Candidate): Observable<Candidate> {
    return this.http.post<Candidate>(Url.getHostNameAndPort()+'/createCandidate', candidateDTO);
  }

  removeCandidate(candidateId: string): Observable<any> {
    return this.http.delete<any>(`${Url.getHostNameAndPort()}/removeCandidate?candidateId=${candidateId}`);
  }

  getCandidateById(candidateId: string): Observable<Candidate> {
    return this.http.get<Candidate>(`${Url.getHostNameAndPort()}/getCandidateById?candidateId=${candidateId}`);
  }

  getCandidatesByElectionName(electionName: string): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(`${Url.getHostNameAndPort()}/getCandidatesByElectionName?electionName=${electionName}`);
  }

  getAllCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(`${Url.getHostNameAndPort()}/getAllCandidates`);
  }

  setElectionNames(electionNames: string[]) {
    this.electionNames = electionNames;
  }

  getElectionNames(): string[] | undefined {
    return this.electionNames;
  }
}
