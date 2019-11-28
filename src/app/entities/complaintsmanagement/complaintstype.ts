import { complaintobject } from './complaintobject';
export interface complainttype {
    TypeId ?: number;
    typeName: string;
    objects ?: complaintobject[];
    
}