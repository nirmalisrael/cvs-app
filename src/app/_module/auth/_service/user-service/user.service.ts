import { Injectable } from '@angular/core';
import { User } from '../../_dto/user';
import { Observable } from 'rxjs';
import { Url } from 'src/app/_dto/url';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(Url.getHostNameAndPort() + '/createUser', user);
  }
  
  getUser(username: string): Observable<User> {
    return this.http.get<User>(`${Url.getHostNameAndPort()}/getUserByUsername?username=${username}`);
  }
}
