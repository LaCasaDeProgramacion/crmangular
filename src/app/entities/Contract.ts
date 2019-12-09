import { Agent } from 'src/app/entities/Agent';
export interface Contract {
  id ?:number;
  title ?:string ;
  startDate ?:Date ;
  endDate ?:Date ;
  salary ?:number ;
  comment ?:string;
  idAgent ?:number ;
  agent ?: Agent;
}
