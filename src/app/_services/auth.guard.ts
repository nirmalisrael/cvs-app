import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../_module/auth/_service/jwt-service/auth.service";

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
  
    canActivate(): boolean {
      if (this.authService.isAuthenticated()) {
        if (this.authService.isAdmin()) {
          return true; // Allow access to the route for admin users
        } else if(this.authService.isUser()){
          return true; // Prevent access to the admin route for non-admin users
        } else {
            this.router.navigate(['/login']);
            return false;
        }
      } else {
        this.router.navigate(['/login']); // Redirect to the login page for unauthenticated users
        return false; // Prevent access to the route for unauthenticated users
      }
    }
  }
  