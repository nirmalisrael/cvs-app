import { DegreeType } from "./degree-type";
import { Department } from "./department";
import { Gender } from "./gender";

export class StudentResponse {

    deptNo?: string;
    
    studentName?: string;

    dateOfBirth?: Date;

    gender?: Gender;

    admissionYear?: number;
    
    degreeType?: DegreeType;

    department?: Department;

    emailId?: String;

    phoneNumber?: number;

    address?: string;
}
