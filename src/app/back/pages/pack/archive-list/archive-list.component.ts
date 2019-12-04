import { Component, OnInit } from '@angular/core';
import { PackService } from 'src/app/services/Pack/pack.service';
import { Pack } from 'src/app/entities/Pack';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-archive-list',
  templateUrl: './archive-list.component.html',
  styleUrls: ['./archive-list.component.scss']
})
export class ArchiveListComponent implements OnInit {
 public archivedpacklist:any;
 closeResult: string;
 public packtodelete:Pack;
  constructor(public packService:PackService,private modalService: NgbModal) { }

  ngOnInit() {
    this.archivedpacklist=[];
    this.getArchiveList();
  }
  getArchiveList(){
this.packService.getarchivedlist().subscribe(data =>{
  console.log(data);
  this.archivedpacklist = data;
}
  )
  }
  getstyle(picture){
    return {
      'background-image':'url('+picture+')' ,
      'background-size': 'cover',
      'background-position': 'center'
  
    }
  }
  getstylee(){
   return {
      'display': 'flex',
      'flex-wrap': 'wrap'
    }
   }
   dearchivepack(packid){
     this.packService.unarchivingpack(packid).subscribe(data => {
       this.getArchiveList();
     })
   }
   openarchive(content,item) {
    this.packtodelete=item;
       this.modalService.open(content,{ariaLabelledBy: 'modal1-title-notification'}).result.then((result) => {
         this.closeResult = `Closed with: ${result}`;
       }, (reason) => {
         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
       });
     }
     private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }
   deletepack(){
       this.packService.deletepack(this.packtodelete.id).subscribe(data => {
         console.log(data);
         this.modalService.dismissAll();
         this.getArchiveList();
         
       })
   }
  

}
