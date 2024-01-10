import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { DegreeType } from 'src/app/_module/student/_dto/degree-type';
import { Department } from 'src/app/_module/student/_dto/department';
import { StudentResponse } from '../../_dto/student-response';
import { Gender } from '../../_dto/gender';
import { StudentRequest } from '../../_dto/student-request';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-student-editor',
  templateUrl: './student-editor.component.html',
  styleUrls: ['./student-editor.component.css']
})
export class StudentEditorComponent {

  degreeTypeOptions = Object.values(DegreeType);
  departmentOptions: string[] = [];

  currentPage: number = 1;
  studentsPerPage: number = 20;
  pages: number[] = [];
  genderOptions = Object.values(Gender);

  showDeptNo = false;
  formHeading: string = '';
  formButton: string = '';
  deptNo?: string;
  successMessage?: string;

  selectedDateOfBirth?: Date;
  selectedDegreeType?: DegreeType;
  selectedDepartment?: Department;
  selectedAdmissionYear?: number;

  showPagination: boolean = false;
  showAddStudentForm = false;
  @ViewChild('tableContainer') tableContainer!: ElementRef;


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

  ]
  studentRequest: StudentRequest = new StudentRequest();
  studentResponse: StudentResponse = new StudentResponse();


  ngOnInit() {
    this.studentRequest = {
      degreeType: undefined // Set an initial value to undefined or a valid DegreeType enum value
    };    
    // this.populateDegreeTypeOptings();
    this.populateDepartmentOptings();
    this.calculatePages();
    console.log(this.studentList.length)
  }

  private populateDegreeTypeOptings() {
    this.degreeTypeOptions = Object.values(DegreeType);
  }
  
  private populateDepartmentOptings() {
    this.departmentOptions = Object.values(Department);
  }

  get studentsToShow() : any[] {
    const startIndex = (this.currentPage - 1) * this.studentsPerPage;
    return this.studentList.slice(startIndex, startIndex + this.studentsPerPage);
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.calculatePages();
    }
  }

  nextPage() {
    if (this.studentsToShow.length === this.studentsPerPage) {
      this.currentPage++;
      this.calculatePages();
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.calculatePages();
  }

  calculatePages() {
    const totalStudents = this.studentList.length;
    const totalPages = Math.ceil(totalStudents / this.studentsPerPage);
    this.pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    this.showPagination = totalPages > 1;
  }

  openDeleteConfirmation(studentDeptNo: string): void {
    this.deptNo = studentDeptNo;
    Swal.fire({
      html: 'Are you sure you want to delete this student ' + this.deptNo,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      confirmButtonColor: 'red',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        //call delete method in service
        Swal.fire(
          'Deleted',
          this.deptNo + ' Student Deleted Successfully!',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', this.deptNo + ' is safe!', 'error');
      }
    });
  }

  openAddStudentForm(): void {
    if(this.formHeading === '' && this.formButton === '') {
      this.formHeading = 'New Student';
    this.formButton = 'Save';
    }
    this.showAddStudentForm = true;
  }

  opentModifyStudentForm(studentResponse: StudentResponse) {
    this.studentRequest = studentResponse;
    this.deptNo = studentResponse.deptNo;
    this.formHeading = 'Modify Student';
    this.formButton = 'Update';
    this.showDeptNo = true;
    this.successMessage = this.deptNo + ' Student Updated Successfully!'
    this.openAddStudentForm();

  }

  submitAddStudentForm(studentRequest: StudentRequest): void {
    this.studentRequest = studentRequest;
    console.log(studentRequest);
    this.showDeptNo = false;
    if(this.successMessage !== null) {
      this.successMessage = this.deptNo + " Student Saved Successfully!";
    }
    Swal.fire({
      title: this.formButton +'d', 
      html: this.successMessage, 
      icon: 'success',
      confirmButtonColor: 'rgb(5, 150, 5)'
    });
    this.cancelAddStudentForm()
  }

  cancelAddStudentForm(): void {
    this.studentRequest = new StudentRequest();
    this.showAddStudentForm = false;
    this.showDeptNo = false;
    this.formHeading = '';
    this.formButton = '';
  }

  
}
