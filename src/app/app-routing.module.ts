import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './_component/admin-page/admin-page.component';
import { HomePageComponent } from './_component/home-page/home-page.component';
import { UserPageComponent } from './_component/user-page/user-page.component';
import { AdminLoginComponent } from './_component/admin-login/admin-login.component';
import { UserLoginComponent } from './_component/user-login/user-login.component';
import { StudentEditorComponent } from './_module/student/_component/student-editor/student-editor.component';
import { AuthEditorComponent } from './_module/auth/_component/auth-editor/auth-editor.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'admin-login', component: AdminLoginComponent},
  { path: 'student-login', component: UserLoginComponent},
  { path: 'admin-page', component: AdminPageComponent},
  { path: 'student-page', component: UserPageComponent},
  { path: 'admin-page/student-editor', component: StudentEditorComponent},
  { path: 'admin-page/auth-editor', component: AuthEditorComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
