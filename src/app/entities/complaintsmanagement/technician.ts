import { complaints } from "./complaints";

export interface technician {
    technicianId ?: number;
    technicianFirstName: string;
    technicianSecondName: string;
    technicianSpecialty: string;
    technicianPhoneNumber: string;
    Complaints ?: complaints[];
}