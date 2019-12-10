
export interface complaintstatistics {

  id ?:number;
  nbTechnicalComplaint ?:number;
  nbfinancialComplaint ?:number;
  nbrelationalComplaint ?:number;
  nbinprogressComplaint ?:number;
  nbOpenedComplaint ?:number;
  nbTreatedComplaint ?:number;
  nbClosedComplaint ?:number;

  nbComplaints ?:number;
  dateStat ?: Date;
}
