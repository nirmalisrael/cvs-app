import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  createStudent(studentRequest: StudentRequest): Observable<StudentResponse> {
    return this.http.post<StudentResponse>(Url.getHostNameAndPort() + '/createStudent', studentRequest);
  }

  updateStudent(deptNo: string, studentRequest: StudentRequest): Observable<StudentResponse> {
    return this.http.put<StudentResponse>(`${Url.getHostNameAndPort()}/modifyStudent?deptNo=${deptNo}`, studentRequest);
  }

  removeStudent(deptNo: string): Observable<any> {
    return this.http.delete<any>(`${Url.getHostNameAndPort()}/removeStudent?deptNo=${deptNo}`);
  }

  getStudentById(deptNo: string): Observable<StudentResponse> {
    return this.http.get<StudentResponse>(`${Url.getHostNameAndPort()}/getStudentById?deptNo=${deptNo}`);
  }

  getAllStudents(): Observable<StudentResponse[]> {
    return this.http.get<StudentResponse[]>(Url.getHostNameAndPort() + '/getAllStudents');
  }

  uploadStudentImage(file: File, deptNo: string): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    const headers = new HttpHeaders();
    return this.http.post(`${Url.getHostNameAndPort()}/uploadStudentImage?deptNo=${deptNo}`, formData, { headers});
  }
}
