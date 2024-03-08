import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Election } from '../_dto/election';
import { Url } from 'src/app/_dto/url';

@Injectable({
  providedIn: 'root'
})
export class ElectionService {

  constructor(private http: HttpClient) { }

  private selectedElectionSubject = new BehaviorSubject<string | undefined>(undefined);
  selectedElection$ = this.selectedElectionSubject.asObservable();

  setSelectedElection(electionName: string) {
    this.selectedElectionSubject.next(electionName);
  }

  createElection(electionName: string, electionDateTime: string, durationHours: number): Observable<Election> {
    return this.http.post<Election>(`${Url.getHostNameAndPort()}/createElection?electionName=${electionName}&electionDateTime=${electionDateTime}&durationHours=${durationHours}`, null);
  }

  removeElection(electionName: string): Observable<any> {
    return this.http.delete<any>(`${Url.getHostNameAndPort()}/removeElection?electionName=${electionName}`);
  }
  
  modifyElection(electionName: string, electionDateTime: string, durationHours: number): Observable<Election> {
    return this.http.put<Election>(`${Url.getHostNameAndPort()}/modifyElection?electionName=${electionName}&startTime=${electionDateTime}&durationHours=${durationHours}`, null);
  }

  getElectionByName(electionName: string): Observable<Election> {
    return this.http.get<Election>(`${Url.getHostNameAndPort()}/getElectionById?electionName=${electionName}`);
  }

  getAllElections(): Observable<Election[]> {
    return this.http.get<Election[]>(Url.getHostNameAndPort()+'/getAllElections');
  }
}
