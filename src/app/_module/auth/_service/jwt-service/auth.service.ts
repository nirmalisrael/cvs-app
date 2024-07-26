import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtRequest } from '../../_dto/jwt-request';
import { JwtResponse } from '../../_dto/jwt-response';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../../_dto/user';
import { Url } from 'src/app/_dto/url';

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

  private isAdminLoggedIn = false;

  private isStudentLoggedIn = false;

  constructor(private http: HttpClient, private router: Router) { 
    this.isAdminLoggedIn = !!localStorage.getItem('isAdminLoggedIn');
  }

  username?: string;

  lgoin(credentials: JwtRequest): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(Url.getHostNameAndPort() + '/login', credentials, httpOptions)
    .pipe(
      tap((response: JwtResponse) => {
        this.token = response.jwtToken;
        this.storeToken(this.token);
        if (this.getRole(response).some(role => role == 'admin')) {
          localStorage.setItem('adminToken', this.token);
          this.isAdminLoggedIn = true;
          localStorage.setItem('isAdminLoggedIn', 'true');
        } else {
          this.isStudentLoggedIn = true;
          localStorage.setItem('isStudentLoggedIn', 'true');
          localStorage.setItem('userToken', this.token);
          localStorage.setItem('username', response.username);
        }
        
      })
    );
  }

  logout(who: string): void {
    if (who == 'admin') {
      this.clearToken('adminToken');
      this.isAdminLoggedIn = false;
      localStorage.removeItem('isAdminLoggedIn');
    } else if(who == 'user') {
      this.clearToken('userToken');
      this.isStudentLoggedIn = false;
      localStorage.removeItem('isStudentLoggedIn');
    } else {
      if (who) {
        const decodedToken = this.decodeToken(who);
        const roles = decodedToken?.roles || [];

        if(roles.includes('admin')) {
          this.clearToken('adminToken');
        } else if(roles.includes('user')) {
          this.clearToken('user');          
        }
      }
    }
    this.router.navigate(['/home']);
  }
  
  _isAdminLoggedIn(): boolean {
    return this.isAdminLoggedIn;
  }

  _isStudentLoggedIn(): boolean {
    return this.isStudentLoggedIn;
  }
  
  getAdminToken(): string | null {
    return localStorage.getItem('adminToken');
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  getUserToken(): string | null {
    return localStorage.getItem('userToken');
  }

  private storeToken(jwtToken: string): void {
    localStorage.setItem('jwtToken', jwtToken);
  }

  private clearToken(who: string): void {
    if (who == 'admin') {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('isAdminLoggedIn');
      this.isAdminLoggedIn = false;
    } else if (who == 'user') {
      localStorage.removeItem('userToken');
      localStorage.removeItem('isStudentLoggedIn');
      this.isStudentLoggedIn = false;
    }
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
