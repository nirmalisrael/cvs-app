import { Component } from '@angular/core';
import { DegreeType } from '../../_dto/degree-type';

@Component({
  selector: 'app-student-editor',
  templateUrl: './student-editor.component.html',
  styleUrls: ['./student-editor.component.css']
})
export class StudentEditorComponent {
  showStudentDetailsPage = true;

  degreeTypeOptions = Object.values(DegreeType);
}
