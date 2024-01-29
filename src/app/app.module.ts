import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './_component/admin-page/admin-page.component';
import { HomePageComponent } from './_component/home-page/home-page.component';
import { UserPageComponent } from './_component/user-page/user-page.component';
import { AdminLoginComponent } from './_component/admin-login/admin-login.component';
import { UserLoginComponent } from './_component/user-login/user-login.component';
import { StudentModule } from './_module/student/student.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './_module/auth/auth.module';
import { ElectionModule } from './_module/election/election.module';
import { ElectionResultModule } from './_module/election-result/election-result.module';

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
    ElectionResultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
