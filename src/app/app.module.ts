import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentModule } from './_module/student/student.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './_module/auth/auth.module';
import { ElectionModule } from './_module/election/election.module';
import { ElectionResultModule } from './_module/election-result/election-result.module';
import { FormsModule } from '@angular/forms';
import { AdminPageComponent } from './_module/auth/_component/admin-page/admin-page.component';
import { HomePageComponent } from './_component/home-page/home-page.component';
import { UserPageComponent } from './_module/student/_component/user-page/user-page.component';
import { AdminLoginComponent } from './_module/auth/_component/admin-login/admin-login.component';
import { UserLoginComponent } from './_module/student/_component/user-login/user-login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './_services/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    HomePageComponent,
    UserPageComponent,
    AdminLoginComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    BrowserAnimationsModule,
    AuthModule,
    ElectionModule,
    ElectionResultModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
