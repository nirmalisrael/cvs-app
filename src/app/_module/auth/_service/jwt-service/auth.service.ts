import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtRequest } from '../../_dto/jwt-request';
import { JwtResponse } from '../../_dto/jwt-response';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

const HOST_PORT = 'http://localhost:8080';
const LOGIN_URL = HOST_PORT + '/cvs/login';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string | null = null;

  constructor(private http: HttpClient, private router: Router) { }

  lgoin(credentials: JwtRequest): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(LOGIN_URL, credentials, httpOptions)
    .pipe(
      tap((response: JwtResponse) => {
        this.token = response.jwtToken;
        this.storeToken(this.token);
      })
    );
  }

  logout(): void {
    this.clearToken();
  }
  
  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  private storeToken(jwtToken: string): void {
    localStorage.setItem('jwtToken', jwtToken);
  }

  private clearToken(): void {
    localStorage.removeItem('jwtToken');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }

  getRole(response: JwtResponse): string[] {
    return response.roles.map(role => role.roleName);
  }

  isAdmin(): boolean {
    // Check if the user has the 'admin' role
    const token = this.getToken();
    if (token) {
      const decodedToken = this.decodeToken(token);
      const roles = decodedToken?.roles || [];
      return roles.includes('admin');
    }
    return false;
  }

  isUser(): boolean {
    // Check if the user has the 'admin' role
    const token = this.getToken();
    if (token) {
      const decodedToken = this.decodeToken(token);
      const roles = decodedToken?.roles || [];
      return roles.includes('user');
    }
    return false;
  }

  private decodeToken(token: string): any {
    try {
      const tokenPayload = token.split('.')[1];
      return JSON.parse(atob(tokenPayload));
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  navigate(url: string) {
    this.router.navigate([url]);
  }
}
