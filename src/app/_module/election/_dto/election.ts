import { ElectionStatus } from "./election-status";

export class Election {

    electionName: string = '';

    startTime?: Date;

    endTime?: Date;

    durationHours?: number;
    
    electionStatus?: ElectionStatus;
}
