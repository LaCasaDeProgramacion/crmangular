import { Component, OnInit } from '@angular/core';
import { Promotion } from 'src/app/entities/Promotion';
import { PromotionServiceService } from 'src/app/services/promotion/promotion-service.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-promotion',
  templateUrl: './list-promotion.component.html',
  styleUrls: ['./list-promotion.component.scss']
})
export class ListPromotionComponent implements OnInit {
  closeResult: string;
UserName:string;
promotionlist:any;
disabledpromotionlist:any;
promotiontoupdate:Promotion;
idoperation:number;
  constructor(public PromotionServicee:PromotionServiceService,private modalService: NgbModal) { }

  ngOnInit() {
    this.promotionlist=[];
    this.disabledpromotionlist=[];
    this.UserName=localStorage.getItem('UserName');
    this.getAssignedPromotionList();
    this.getDisabledAssignedPromotionList();
  }

  getAssignedPromotionList(){
    this.PromotionServicee.getListAssignedPromotion().subscribe(data=>
      {
        console.log(data)
        this.promotionlist = data;
        console.log(this.promotionlist)
      for(let p of this.promotionlist){
        p.productnewvalue =p.productnewvalue.toFixed(2);
      }
      })

  }
  getDisabledAssignedPromotionList(){
    this.PromotionServicee.getListDisabledPromotion().subscribe(data =>
      {
        this.disabledpromotionlist = data;
        for(let p of this.disabledpromotionlist){
          p.productnewvalue =p.productnewvalue.toFixed(2);
        }
      })
  }
  getstyle(picture){
    return {
      'background-image':'url('+picture+')' ,
      'background-size': 'cover',
      'background-position': 'center'
  
    }

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
//update Modal
open1(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal1-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
open2(content,prom) {
  this.promotiontoupdate = prom;
  this.modalService.open(content, {ariaLabelledBy: 'modal2-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
opendisable(contentdisable,prom){
  this.idoperation= prom.id;
  this.modalService.open(contentdisable, {ariaLabelledBy: 'modaldisable-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
opendelete(contentdelete,prom){
  this.idoperation= prom.id;
  this.modalService.open(contentdelete, {ariaLabelledBy: 'modaldelete-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
openenable(contentenable,prom){
  this.idoperation= prom.id;
  this.modalService.open(contentenable, {ariaLabelledBy: 'modalenable-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
closee(t:boolean){
if(t == true){
  this.modalService.dismissAll();

}
}

deletepack(){
  this.PromotionServicee.deletepromotion(this.idoperation).subscribe(data => {
    this.getAssignedPromotionList();
    this.getDisabledAssignedPromotionList();
    this.modalService.dismissAll();
    console.log(data);
  })
}
enableconfir(){
  this.PromotionServicee.enablepromotion(this.idoperation).subscribe(data => {
    this.getAssignedPromotionList();
    this.getDisabledAssignedPromotionList();
    this.modalService.dismissAll();
    console.log(data);
  })
}
disableprom(){
  this.PromotionServicee.disablepromotion(this.idoperation).subscribe(data => {
    this.getAssignedPromotionList();
    this.getDisabledAssignedPromotionList();
    this.modalService.dismissAll();
    console.log(data);
  })
}
formulairesubmited(t:boolean){
  if(t == true) {
    this.getAssignedPromotionList();
  }
}


}
