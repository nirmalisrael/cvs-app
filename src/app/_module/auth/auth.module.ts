import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthEditorComponent } from './_component/auth-editor/auth-editor.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AuthModule { }
