import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtRequest } from 'src/app/_module/auth/_dto/jwt-request';
import { AuthService } from 'src/app/_module/auth/_service/jwt-service/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor(private authService: AuthService, private router: Router) {}
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
        
        if(role.some(role => role == 'user')) {
          this.router.navigate(['/student-page'])
        }
      },
      error => {
       alert("Invalid Username or Password!");
      }
    )
  }

}
