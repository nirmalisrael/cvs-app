import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../_service/jwt-service/auth.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {

  constructor(private router: Router, public authService: AuthService) {}

}
