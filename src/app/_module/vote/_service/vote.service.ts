import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vote } from '../_dto/vote';
import { Observable } from 'rxjs';
import { Url } from 'src/app/_dto/url';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http: HttpClient) { }

  castVote(vote: Vote): Observable<Vote> {
    return this.http.post<Vote>(Url.getHostNameAndPort() + '/createVote', vote);
  }
}
