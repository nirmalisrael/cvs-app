import { Component } from '@angular/core';
import { AuthService } from '../../_service/jwt-service/auth.service';
import { JwtRequest } from '../../_dto/jwt-request';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  constructor(private authService: AuthService) { }

  jwtRequest: JwtRequest = {
    username : '',
    password : ''
  };

  login() {
    this.authService.lgoin(this.jwtRequest).subscribe(
      (response) => {
        console.log(response);
        
      },
      (error) => {
        console.log(error);
        
      }
    )
    // console.log(this.jwtRequest);
    
  }
}
