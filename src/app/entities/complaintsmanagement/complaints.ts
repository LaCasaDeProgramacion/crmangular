import { User } from 'src/app/entities/user';
import { complainttype } from './complaintstype';
import { technician } from './technician';
import { complaintstate } from './complaintstate';
import { complaintobject } from './complaintobject';
import { complaintcomment } from './complaintcomment';
export interface complaints {
    id ?: number;
    complaintBody ?: string;
    complaintObject ?: complaintobject;
    complaintState ?: complaintstate;
    complaintDate ?: Date;
    assignmentDate ?: Date;
    closingDate ?: Date;
    user ?: User;
    admin ?:User;
    technician ?: technician;
    typeComplaint ?: complainttype;
    comments ?: complaintcomment[];
}