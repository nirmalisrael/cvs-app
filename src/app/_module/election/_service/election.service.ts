import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElectionService {

  constructor() { }

  private selectedElectionSubject = new BehaviorSubject<string | undefined>(undefined);
  selectedElection$ = this.selectedElectionSubject.asObservable();

  setSelectedElection(electionName: string) {
    this.selectedElectionSubject.next(electionName);
  }
}
