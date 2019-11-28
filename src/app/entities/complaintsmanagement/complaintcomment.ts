import { complaints } from './complaints';
export interface complaintcomment {
    ComplaintId: number;
    comment: string;
    CommentDate: Date;
    Likes: number;
    User:number;
    complaint: complaints;
    
}