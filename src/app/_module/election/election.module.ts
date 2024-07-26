import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectionEditorComponent } from './_component/election-editor/election-editor.component';
import { FormsModule } from '@angular/forms';
import { CandidateEditorComponent } from './_component/candidate-editor/candidate-editor.component';



@NgModule({
  declarations: [
    ElectionEditorComponent,
    CandidateEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ElectionModule { }
