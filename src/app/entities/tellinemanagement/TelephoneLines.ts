import { ServicesLines } from './ServicesLines';
import { User } from 'src/app/entities/user';
export interface TelephoneLines {
     id ?: number;
	 lineNumber ?: string;
	 dateCreation ?:Date;
	 codePIN ?: number;
	 codePUK ?: number;
	 validityDate ?: Date;
	 lineState ?:number;
	 solde ?: number;
	 services ?:ServicesLines;
	 user ?: User;
    
}