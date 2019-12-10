import { Component, OnInit } from '@angular/core';
import { PackService } from 'src/app/services/Pack/pack.service';
import { Pack } from 'src/app/entities/Pack';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { StatPack } from 'src/app/entities/StatPack';
import { StatPackService } from 'src/app/services/statpack/stat-pack.service';

@Component({
  selector: 'app-archive-list',
  templateUrl: './archive-list.component.html',
  styleUrls: ['./archive-list.component.scss']
})
export class ArchiveListComponent implements OnInit {
  BestpackforToday:StatPack;
  mostgainmoneystatpack:StatPack;
  PackoftheMonth:StatPack;
  SelledQuantitypacktoday:StatPack;
  SelledQuantitypacktodayTITLE:string;
  PackoftheMonthTITLE:string;
  mostgainmoneystatpackTITLE:string;
  BestpackforTodayTITLE:string;
 public archivedpacklist:any;
 closeResult: string;
 public packtodelete:Pack;
  constructor(public packService:PackService,private modalService: NgbModal,public statservice:StatPackService) { }

  ngOnInit() {
    this.archivedpacklist=[];
    this.getArchiveList();
     //stat
     this.getBestpackforToday();
     this.getmostgainmoneystatpack();
     this.getPackoftheMonth();
     this.getSelledQuantitypacktoday();
  }
  getSelledQuantitypacktoday(){
    this.SelledQuantitypacktoday = {};
    this.statservice.getSelledQuantitypacktoday().subscribe(response => {
      this.SelledQuantitypacktoday = response;
      this.SelledQuantitypacktodayTITLE = response.pack.title;
  })
  }
  getPackoftheMonth(){
    this.PackoftheMonth = {};
    this.statservice.getPackoftheMonth().subscribe(response => {
      this.PackoftheMonth = response;
      this.PackoftheMonthTITLE = response.pack.title;
  })
  }
  getmostgainmoneystatpack(){
    this.mostgainmoneystatpack = {} ; 
    this.statservice.getmostgainmoneystatpack().subscribe(response => {
      this.mostgainmoneystatpack = response;
      this.mostgainmoneystatpackTITLE = response.pack.title;
  })
  }
  getBestpackforToday(){
    this.BestpackforToday = {};
    this.statservice.getBestpackforToday().subscribe(response => {
        this.BestpackforToday = response;
        this.BestpackforTodayTITLE = response.pack.title;
    })
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
