import { Component } from '@angular/core';
import { DegreeType } from '../../_dto/degree-type';
import { Department } from '../../_dto/department';
import { StudentResponse } from '../../_dto/student-response';
import { Gender } from '../../_dto/gender';
import { StudentRequest } from '../../_dto/student-request';
import { AuthService } from 'src/app/_module/auth/_service/jwt-service/auth.service';

@Component({
  selector: 'app-student-editor',
  templateUrl: './student-editor.component.html',
  styleUrls: ['./student-editor.component.css']
})
export class StudentEditorComponent {

  constructor(public authService: AuthService) {}
  showStudentPage = true;

  showAllStudents = false;

  showEditStudent = false;

  studentPageHeading?: string;

  saveBtnName: string = 'Save';

  degreeTypeOptions = Object.values(DegreeType);
  departmentOptions = Object.values(Department);
  genderOptions = Object.values(Gender);

  selectedStudent: StudentResponse = {deptNo: '21UCS01', studentName: 'Durai', 
  dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, 
  degreeType: DegreeType.PG, department: Department.COMPUTER_SCIENCE, 
  emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, 
  address: '220, madha kovil street, alliyanthal, tiruvannaamali.'};

  studentResponse: StudentResponse = {deptNo: '21UCS01', studentName: 'Durai', 
  dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, 
  degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, 
  emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, 
  address: '220, madha kovil street, alliyanthal, tiruvannaamali.'};
  
  studentList: StudentResponse[] = [
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS02', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS03', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS04', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},

  ];

  newStudent: StudentRequest = new StudentRequest;
  isEditing: Boolean = false;

  imageUrl: string | ArrayBuffer | null = "assets/student-editor/student-profile.jpg";

  openStudent(student: StudentResponse) {
    if(student.deptNo === null) {
      this.studentPageHeading = 'Student Profile';
    } else {
      this.studentPageHeading = 'New Student Profile';
      this.showEditStudent = true;
    }
    this.selectedStudent = student;
    this.showAllStudents = false;
    this.showStudentPage = true;
  }

  toggleEdit(index: number): void {
    this.isEditing = !this.isEditing;
  }

  onFileSelect(event: any) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const file = event.target.files[0];

      reader.onload = () => {
        this.imageUrl = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }

  onChangeStudentPageToBack() {
    this.showStudentPage = false;
    this.showAllStudents = true;
  }

  onChangeUpdateStudent() {
    this.saveBtnName = 'Update';
    this.showEditStudent = !this.showEditStudent;
  }
}
