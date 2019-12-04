import { Agent } from './Agent';
import { Vehicle } from './Vehicle';
export interface Event_agent {
  event_agentPK ?:{
    idAgent ?:number ;
    idEvent ?:number ;
  }
  launched ?:boolean;
  agent ?:Agent;

}
