import { complainttype } from './complaintstype';
import { technician } from './technician';
import { complaintstate } from './complaintstate';
import { complaintobject } from './complaintobject';
import { complaintcomment } from './complaintcomment';
export interface complaints {
    ComplaintsId: number;
    ComplaintBody: string;
    ComplaintObeject: complaintobject;
    ComplaintState: complaintstate;
    ComplaintDate: Date;
    AssignmentDate: Date;
    ClosingDate: Date;
    User: number;
    Admin:number;
    Technician: technician;
    TypeComplaint: complainttype;
    Comments: complaintcomment[];
}