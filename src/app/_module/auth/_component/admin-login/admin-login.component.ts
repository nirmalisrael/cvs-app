import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_service/jwt-service/auth.service';
import { JwtRequest } from '../../_dto/jwt-request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{

  constructor(private authService: AuthService, private router: Router) { }
  
  
  ngOnInit(): void {
    if (this.authService._isAdminLoggedIn()) {
      this.router.navigate(['/admin-page']);
    }  
  }

  jwtRequest: JwtRequest = {
    username : '',
    password : ''
  };

  login() {
    this.authService.lgoin(this.jwtRequest).subscribe(
      (response) => {
        console.log(response)
        const role: string[] = this.authService.getRole(response);
        console.log(role);
        
        if(role.some(role => role == 'admin')) {
          this.router.navigate(['/admin-page'])
        }
      },
      error => {
       alert("Invalid Username or Password!");
      }
    )
    // console.log(this.jwtRequest);
  }
}
