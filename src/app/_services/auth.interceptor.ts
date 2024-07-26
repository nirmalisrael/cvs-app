import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../_module/auth/_service/jwt-service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { } 

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authService.getToken();
        if (token) {
            const authReq = req.clone({
                setHeaders: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            });

            return next.handle(authReq).pipe(
                catchError((error: HttpErrorResponse) => {
                  if (error.status === 401) {
                    // Token expired or invalid, log user out
                    
                    this.authService.logout(token);
                  }
                  return throwError(error);
                })
              );
        }
        return next.handle(req);
    }
}