import { complaints } from './complaints';
import { User } from './../user';
export interface notificationComplaint {

    id ?:number;
    message ?:string;
    state ?:number;
    userDestination ?:User;
    complaint ?:complaints;
    
  }