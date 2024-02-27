import { Component, OnInit } from '@angular/core';
import { DegreeType } from '../../_dto/degree-type';
import { StudentResponse } from '../../_dto/student-response';
import { Gender } from '../../_dto/gender';
import { StudentRequest } from '../../_dto/student-request';
import { AuthService } from 'src/app/_module/auth/_service/jwt-service/auth.service';
import { StudentService } from '../../_service/student.service';
import { Department, getKeyByValue } from '../../_dto/department';

@Component({
  selector: 'app-student-editor',
  templateUrl: './student-editor.component.html',
  styleUrls: ['./student-editor.component.css']
})
export class StudentEditorComponent implements OnInit{

  constructor(public authService: AuthService, public studentService: StudentService) {}
  
  showStudentPage = false;

  showAllStudents = true;

  showEditStudent = false;

  showDeptNo = true;

  showUpdateButton = false;
  showSaveButton = true;

  studentPageHeading?: string;

  saveBtnName: string = 'Save';

  degreeTypeOptions = Object.values(DegreeType);
  departmentOptions = Object.values(Department);
  genderOptions = Object.values(Gender);

  selectedStudent: StudentResponse = new StudentResponse();

  studentResponse: StudentResponse = new StudentResponse();
  
  selectedDepartment?: Department;

  studentList: StudentResponse[] = [
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS02', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS03', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS04', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    // {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},

  ];

  
  newStudent: StudentRequest = new StudentRequest();

  isEditing: Boolean = false;

  imageUrl: string | ArrayBuffer | null = "assets/student-editor/student-profile.jpg";
  
  ngOnInit(): void {
    this.getAllStudents();
    console.log(this.studentList);
    // console.log(this.studentService.getDepartmentDisplayName(Department.BUSINESS_ADMINISTRATION));
    
  }

  openStudent(student: StudentResponse) {
    console.log(student.deptNo);
    
    if(student.deptNo !== undefined) {
      this.studentPageHeading = 'Student Profile';
    } else {
      this.studentPageHeading = 'New Student Profile';
      this.showUpdateButton = false;
      this.showSaveButton = true;
      this.showEditStudent = true;
      this.showDeptNo = false;
    }
    this.selectedStudent = student;
    this.showAllStudents = false;
    this.showStudentPage = true;
  }

  openNewStudent() {
    this.openStudent(new StudentRequest());
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
    this.showEditStudent = false;
  }

  onChangeUpdateStudent() {
    this.showSaveButton = false;
    this.showUpdateButton = true;
    this.showEditStudent = !this.showEditStudent;
  }

  setDateOfBirth(student: StudentResponse): Date {
    const dobString = student.dateOfBirth;
    if(dobString) {
      return new Date(dobString);
    }
    return new Date();
  }

  setDepartment(student: StudentResponse): Department | undefined{
    const keyFromStudent = student.department;

    if (keyFromStudent) {
      if (Object.keys(Department).includes(keyFromStudent)) {
        const value = Department[keyFromStudent as unknown as keyof typeof Department];
        this.selectedDepartment = value;
        return value;
      }
    }
    return undefined;
  }

  setGender(student: StudentResponse): Gender | undefined {
    const gender = student.gender;
    if (gender) {
      if(Object.keys(Gender).includes(gender)) {
        const value = Gender[gender as unknown as keyof typeof Gender];
        return value;
      }
    }
    return undefined;
  }

  createStudent() {
    this.newStudent = this.selectedStudent;
    console.log(this.newStudent);
    this.newStudent.department = getKeyByValue(Department, this.newStudent.department);
    this.newStudent.gender = getKeyByValue(Gender, this.newStudent.gender);
    this.studentService.createStudent(this.newStudent).subscribe(
      (createdStudent) => {
        this.selectedStudent = createdStudent;
        console.log(createdStudent);
        
      }
    )
    
  }

  updateStudent(student?: StudentResponse) {
    console.log(student);
    
  }
  
  getAllStudents(): StudentResponse[] {
    this.studentService.getAllStudents().subscribe(
      (students => {
        this.studentList = students;
      })
    )
    return this.studentList;
  }
}
