import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { DegreeType } from 'src/app/_module/student/_dto/degree-type';
import { Department } from 'src/app/_module/student/_dto/department';
import { StudentResponse } from '../../_dto/student-response';
import { Gender } from '../../_dto/gender';
import { StudentRequest } from '../../_dto/student-request';

@Component({
  selector: 'app-student-editor',
  templateUrl: './student-editor.component.html',
  styleUrls: ['./student-editor.component.css']
})
export class StudentEditorComponent {
  degreeTypeOptions: string[] = [];
  departmentOptions: string[] = [];

  currentPage: number = 1;
  studentsPerPage: number = 20;
  pages: number[] = [];
  genderOptions = Object.values(Gender);

  showDeleteConfirmation = false;
  studentDeptNo: string = '';

  selectedDateOfBirth?: Date;
  selectedDegreeType?: DegreeType;
  selectedDepartment?: Department;

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

  ngOnInit() {
    this.populateDegreeTypeOptings();
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
    this.studentDeptNo = studentDeptNo;
    this.showDeleteConfirmation = true;
  }

  confirmDelete(): void {
    // this.studentService.removeStudent(this.studentIdToDelete);
    // this.students = this.studentService.getStudents();
    this.closeDeleteConfirmation();
  }

  cancelDelete(): void {
    this.closeDeleteConfirmation();
  }

  closeDeleteConfirmation(): void {
    this.showDeleteConfirmation = false;
  }

  openAddStudentForm(): void {
    this.showAddStudentForm = true;
  }

  submitAddStudentForm(): void {
    // Call your service method to add the new student with this.newStudentRequest
    // Reset the form and close the popup
    this.studentRequest = new StudentRequest();
    this.showAddStudentForm = false;
  }

  cancelAddStudentForm(): void {
    // Reset the form and close the popup
    this.studentRequest = new StudentRequest();
    this.showAddStudentForm = false;
  }
}
