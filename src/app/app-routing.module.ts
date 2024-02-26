import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentEditorComponent } from './_module/student/_component/student-editor/student-editor.component';
import { AuthEditorComponent } from './_module/auth/_component/auth-editor/auth-editor.component';
import { ElectionEditorComponent } from './_module/election/_component/election-editor/election-editor.component';
import { CandidateEditorComponent } from './_module/election/_component/candidate-editor/candidate-editor.component';
import { ElectionResultComponent } from './_module/election-result/_component/election-result/election-result.component';
import { HomePageComponent } from './_component/home-page/home-page.component';
import { AdminLoginComponent } from './_module/auth/_component/admin-login/admin-login.component';
import { UserLoginComponent } from './_module/student/_component/user-login/user-login.component';
import { AdminPageComponent } from './_module/auth/_component/admin-page/admin-page.component';
import { UserPageComponent } from './_module/student/_component/user-page/user-page.component';
import { AuthGuard } from './_services/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'admin-login', component: AdminLoginComponent},
  { path: 'student-login', component: UserLoginComponent},
  { path: 'admin-page', component: AdminPageComponent, canActivate: [AuthGuard]},
  { path: 'student-page', component: UserPageComponent, canActivate: [AuthGuard]},
  { path: 'admin-page/student-editor', component: StudentEditorComponent},
  { path: 'admin-page/auth-editor', component: AuthEditorComponent, canActivate: [AuthGuard]},
  { path: 'admin-page/election-editor', component: ElectionEditorComponent, canActivate: [AuthGuard]},
  { path: 'admin-page/candidate-editor', component: CandidateEditorComponent, canActivate: [AuthGuard]},
  { path: 'admin-page/election-result', component: ElectionResultComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
