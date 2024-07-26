import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthEditorComponent } from './_component/auth-editor/auth-editor.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/_services/auth.interceptor';



@NgModule({
  declarations: [
    AuthEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AuthModule { }
