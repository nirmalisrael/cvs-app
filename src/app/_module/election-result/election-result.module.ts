import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectionResultComponent } from './_component/election-result/election-result.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ElectionResultComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ElectionResultModule { }
