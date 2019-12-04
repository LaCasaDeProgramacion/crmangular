import { User } from 'src/app/entities/user';
import { complaints } from './complaints';
export interface complaintcomment {
    id ?: number;
    comment ?: string;
    commentDate ?: Date;
    likes ?: number;
    user ?:User;
    complaint ?: complaints;
    
}