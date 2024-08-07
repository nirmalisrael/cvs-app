import { Component, OnInit } from '@angular/core';
import { DegreeType } from '../../_dto/degree-type';
import { StudentResponse } from '../../_dto/student-response';
import { Gender, getKeyByValueForGender } from '../../_dto/gender';
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

  showNewStudent = false;

  showDeptNo = true;

  showsEmptyStudentMsg  = false;

  studentPageHeading?: string;

  selectedDegreeType: string = 'null';

  selectedDepartmentOption: string = 'null';

  selectedAdmissionYear: number = 0;

  saveBtnName: string = 'Save';

  degreeTypeOptions = Object.values(DegreeType);
  departmentOptions = Object.values(Department);
  genderOptions = Object.values(Gender);

  selectedStudent: StudentResponse = new StudentResponse();

  studentResponse: StudentResponse = new StudentResponse();
  
  selectedDepartment?: Department;

  selectedGender?: Gender;

  studentList: StudentResponse[] = [];

  selectedFile?: File;

  
  newStudent: StudentRequest = new StudentRequest();

  isEditing: Boolean = false;

  imageUrl: string | ArrayBuffer | null = "assets/student-editor/student-profile.jpg";

  deptNo?: string;
  
  ngOnInit(): void {
    this.getAllStudents();
  }

  openUpdateStudent(student: StudentResponse) {
   this.showEditStudent = false;
   this.showAllStudents = false;
   this.showNewStudent = false;
   this.showDeptNo = true;
   this.showStudentPage = true;
   this.selectedStudent = student;
  }

  openNewStudent() {
    this.selectedStudent = new StudentResponse();
    this.selectedDepartment = undefined;
    this.selectedGender = undefined;
    // this.openStudent(new StudentRequest());
    this.showAllStudents = false;
    this.showDeptNo =false;
    this.showNewStudent = true;
    this.showEditStudent = true;
  }

  onFileSelect(event: any) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const file = event.target.files[0];

      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(file);
      this.selectedFile = file;
    }
  }

  onChangeStudentPageToBack() {
    this.showStudentPage = false;
    this.showEditStudent = false;
    this.showNewStudent = false
    this.showAllStudents = true;
    this.getAllStudents();
  }

  onSelectDegreeType(event: Event): void {
    const degreeType: string = (event.target as HTMLSelectElement).value;
    if (degreeType === 'All') {
      this.selectedDegreeType = 'null';
      this.getStudentsByFilter(this.selectedDegreeType, this.selectedDepartmentOption, this.selectedAdmissionYear);
    } else {
      this.selectedDegreeType = degreeType;
      this.getStudentsByFilter(this.selectedDegreeType, this.selectedDepartmentOption, this.selectedAdmissionYear);
    }
  }

  onSelectDepartment(event: Event): void {
    let department = (event.target as HTMLSelectElement).value;
    console.log(department);
    if (department === 'All') {
      this.selectedDepartmentOption = 'null';
      this.getStudentsByFilter(this.selectedDegreeType, this.selectedDepartmentOption, this.selectedAdmissionYear);
    } else {
      department = getKeyByValue(Department, department);
      this.selectedDepartmentOption = department;
      this.getStudentsByFilter(this.selectedDegreeType, this.selectedDepartmentOption, this.selectedAdmissionYear);
    }
    
  }

  onSelectAdmissionYear(event: Event): void {
    const admissionYear: string =(event.target as HTMLSelectElement).value;
    console.log(admissionYear);
    
    if (admissionYear === 'All') {
      this.selectedAdmissionYear = 0;
      this.getStudentsByFilter(this.selectedDegreeType, this.selectedDepartmentOption, this.selectedAdmissionYear);
    } else {
      const admissionYearNumber = parseInt(admissionYear);
      this.selectedAdmissionYear = admissionYearNumber;
      this.getStudentsByFilter(this.selectedDegreeType, this.selectedDepartmentOption, this.selectedAdmissionYear);
    }
  }

  onClickEditButton() {
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
    if (student) {
      return this.studentService.setDepartment(student);
    }
    return undefined
  }

  setGender(student: StudentResponse): Gender | undefined {
    if (student) {
      return this.studentService.setGender(student);
    }
    return undefined;
  }

  createStudent() {
    let dummy: StudentResponse = new StudentResponse();
    const department = getKeyByValue(Department, Department.BUSINESS_ADMINISTRATION);
    console.log(department);
    
    if (department) {
      this.studentService.getStudentsByFiler(DegreeType.UG, 'null', 0).subscribe(
        (res) => {
          console.log(res);
          
        }
      );

    }
    // this.newStudent = this.selectedStudent;
    // this.newStudent.department = getKeyByValue(Department, this.selectedDepartment);
    // this.newStudent.gender = getKeyByValueForGender(Gender, this.selectedGender);
    // console.log(this.newStudent);
    
    // this.studentService.createStudent(this.newStudent).subscribe(
    //   (createdStudent) => {
    //     this.selectedStudent = createdStudent;
    //     console.log(createdStudent);
        
    //     if(createdStudent) {
    //       console.log(createdStudent);
    //       this.showNewStudent = false;
    //       this.showEditStudent = false;
    //       this.showDeptNo = true;
    //       this.showStudentPage = true;
    //       alert("Student saved successfully! Department No. " + this.selectedStudent.deptNo);
    //     }else {
    //       alert("An unexpected error occurred while saving the student.");
    //     }
    //   },
    //   (error) => {
    //     console.error("Error creating student:", error);
    //     alert("Please enter all details correctly!");
    //   }
    // )
    
  }

  updateStudent(student?: StudentResponse) {
    student = this.selectedStudent;
    student.department = getKeyByValue(Department, this.selectedDepartment);
    student.gender = getKeyByValueForGender(Gender, this.selectedGender);
    if(this.selectedStudent.deptNo !== undefined) {
      this.studentService.updateStudent(this.selectedStudent. deptNo, student).subscribe(
        (updatedStudent) => {
          this.selectedStudent = updatedStudent;
          console.log(updatedStudent);
          
          if(updatedStudent) {
            console.log(updatedStudent);
            this.showNewStudent = false;
            this.showEditStudent = false;
            this.showDeptNo = true;
            this.showStudentPage = true;
            if (this.selectedFile !== undefined && this.selectedStudent.deptNo !== undefined) {
              this.studentService.uploadStudentImage(this.selectedFile, this.selectedStudent.deptNo).subscribe(
                (response) => {
                  console.log(response);
                  
                }
              )
            }
            alert("Student Updated successfully! Department No. " + this.selectedStudent.deptNo);
          }else {
            alert("An unexpected error occurred while updating the student.");
          }
        },
        (error) => {
          console.error("Error creating student:", error);
          alert("Please enter all details correctly!");
        }
      )
    }
    this.toggleEmptyStudentMsg();
  }

  removeStudent(deptNo?: string) {
    if (deptNo !== undefined) {
       const isConfirmed = confirm("Are you sure to remove student " + deptNo);
       if (isConfirmed) {  
        this.studentService.removeStudent(deptNo).subscribe(
          (response) => {
            console.log(response);
            if (response.message === this.selectedStudent.deptNo) {
              this.onChangeStudentPageToBack();
              alert(response.message + " Student removed Successfully!");
            } else {
              alert(deptNo + " Student Not found!");
            }
          }
        )
      } else {
        alert(deptNo + " student is safe!");
      }
    }
    this.toggleEmptyStudentMsg();
  }

  getStudentById() {
    const tempStudentList = this.studentList;
    if (this.deptNo !== undefined) {
      this.studentService.getStudentById(this.deptNo).subscribe(
        (studentResponse) => {
          this.studentList = [];
          if (studentResponse) {
            this.studentList.push(studentResponse);
          }
          if (this.studentList.length === 0) {
            this.showsEmptyStudentMsg = true;
          }
        }
      )
    }
    this.toggleEmptyStudentMsg();
  }

  getStudentsByFilter(degreeType: string | null, department: string | null, admissionYear: number | 0) {
    console.log(degreeType, department, admissionYear);
    
    this.studentService.getStudentsByFiler(degreeType, department, admissionYear).subscribe(
      (response) => {
        this.studentList = response;
        console.log(response);
        
      }
    )
    this.toggleEmptyStudentMsg();
  }
  
  getAllStudents(): StudentResponse[] {
    this.studentService.getAllStudents().subscribe(
      (students => {
        this.studentList = students;
        if (this.studentList.length === 0) {
          this.showsEmptyStudentMsg = true;
        }
      })
    )
    this.toggleEmptyStudentMsg();
    return this.studentList;
  }

  toggleEmptyStudentMsg() {
    if (this.studentList.length > 0) {
      this.showsEmptyStudentMsg = false;
    } else {
      this.showsEmptyStudentMsg = true;
    }
  }
}
