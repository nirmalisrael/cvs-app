import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentResponse } from '../_dto/student-response';
import { Url } from 'src/app/_dto/url';
import { Gender } from '../_dto/gender';
import { StudentRequest } from '../_dto/student-request';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  createStudent(studentRequest1: StudentRequest): Observable<StudentResponse> {
    const studentRequest = {
      studentName: "Nirmal I",
      dateOfBirth: "2004-06-12",
      gender: "MALE",
      admissionYear: 2021,
      degreeType: "UG",
      department: "COMPUTER_SCIENCE",
      emailId: "nirmalmeenu111@gmail.com",
      phoneNumber: 8754271061,
      address: "220, madha kovil street"
    };
    return this.http.post<StudentResponse>(Url.getHostNameAndPort() + '/createStudent', studentRequest);
  }
  getAllStudents(): Observable<StudentResponse[]> {
    return this.http.get<StudentResponse[]>(Url.getHostNameAndPort() + '/getAllStudents');
  }
}
