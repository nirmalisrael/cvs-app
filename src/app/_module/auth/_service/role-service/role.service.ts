import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../../_dto/role';
import { Observable } from 'rxjs';
import { Url } from 'src/app/_dto/url';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  createRole(role: Role): Observable<Role> {
    return this.http.post<Role>(Url.getHostNameAndPort() + '/createRole', role);
  }
}
