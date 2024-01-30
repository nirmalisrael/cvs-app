import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StudentEditorComponent } from './_component/student-editor/student-editor.component';

@NgModule({
  declarations: [
    StudentEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class StudentModule { }
