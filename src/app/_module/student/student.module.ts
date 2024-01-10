import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentEditorComponent } from './_component/student-editor/student-editor.component';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
