import { StudentResponse } from "../../student/_dto/student-response";

export class Candidate {

    candidateId?: string;

    deptNo?: string;

    electionName?: string;

    candidateName?: string;

    voteCount?: number;

    student?: StudentResponse;
}
