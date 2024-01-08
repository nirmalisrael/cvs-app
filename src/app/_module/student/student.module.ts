import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentEditorComponent } from './_component/student-editor/student-editor.component';
import { FormsModule } from '@angular/forms';



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
