import { Evenement } from './../../../../../entities/Evenement';
import { element } from 'protractor';
import { EventService } from './../../../../../services/prospectingManagement/event.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  closeResult: string;
  closeResult1: string;
  searchText;
  eventToDelete;

  collection = { count: null, events:null  };
  config:any;

  constructor(private modalService: NgbModal,
    private EventService:EventService,
    private router: Router) {
      if (localStorage['Role']!="ADMIN")
      {
        this.router.navigate(['/home']);

      }

    }


//update Vehicle
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
//Add Vehicle
open1(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal1-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
private getDismissReason1(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}


loadEvents()
{
   this.EventService.get().subscribe(
     data => {
      this.collection.events =data;
     }
   );
   this.config = {
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: this.collection.count
  };
}
pageChanged(event){
  this.config.currentPage = event;
}


ngOnInit() {
  this.loadEvents();
}
suggestEvent(content)
{
  this.loadEvents();
  this.EventService.proposition().subscribe(data=> {
    if(data['statusrslt']=='Please answer the previous request of event'){
      console.log("Please answer the previous request of event")
      this.open(content);
    }
      else {

        this.router.navigate(['back/suggest-event/'+data.id]);
      }

  });
}
close()
{
  this.modalService.dismissAll();
}

recentSuggestion(content)
{
  this.loadEvents();
  this.EventService.proposition().subscribe(data=> {
    if(data['statusrslt']=='Please answer the previous request of event'){
      console.log("Please answer the previous request of event");
      this.EventService.recentSuggestion().subscribe(data=>
        {

            this.router.navigate(['back/suggest-event/'+data.id]);


        });
    }
      else {

        this.open(content);

      }

  });





}


openarchive(content,id) {
console.log("OPENED")
  this.eventToDelete=id;
     this.modalService.open(content,{ariaLabelledBy: 'modal1-title-notification'}).result.then((result) => {
       this.closeResult = `Closed with: ${result}`;
     }, (reason) => {
       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
     });
   }

   delete()
   {
      this.EventService.Delete(this.eventToDelete).subscribe(data => {
        this.loadEvents();
      });

   }

}
