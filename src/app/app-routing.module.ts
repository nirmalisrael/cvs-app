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
import { ElectionEditorComponent } from './_module/election/_component/election-editor/election-editor.component';
import { CandidateEditorComponent } from './_module/election/_component/candidate-editor/candidate-editor.component';
import { ElectionResultComponent } from './_module/election-result/_component/election-result/election-result.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'admin-login', component: AdminLoginComponent},
  { path: 'student-login', component: UserLoginComponent},
  { path: 'admin-page', component: AdminPageComponent},
  { path: 'student-page', component: UserPageComponent},
  { path: 'admin-page/student-editor', component: StudentEditorComponent},
  { path: 'admin-page/auth-editor', component: AuthEditorComponent},
  { path: 'admin-page/election-editor', component: ElectionEditorComponent},
  { path: 'admin-page/candidate-editor', component: CandidateEditorComponent},
  { path: 'admin-page/election-result', component: ElectionResultComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
