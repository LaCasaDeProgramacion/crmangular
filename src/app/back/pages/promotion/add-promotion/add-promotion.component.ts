import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/products/api.service';
import { Promotion } from 'src/app/entities/Promotion';
import { PromotionServiceService } from 'src/app/services/promotion/promotion-service.service';

@Component({
  selector: 'app-add-promotion',
  templateUrl: './add-promotion.component.html',
  styleUrls: ['./add-promotion.component.scss']
})
export class AddPromotionComponent implements OnInit {
  public Promotion:Promotion={title:'',promotiontype:'',promotionunit:'',validfrom:null,validuntil:null};
 @Output() closing = new EventEmitter<boolean>();
 @Output() added = new EventEmitter<boolean>();
  productlist:any[]=[];
  produitselected:any;
  constructor(public productService:ApiService,public promotionService:PromotionServiceService) { }

  ngOnInit() {

    this.closing.emit(false);
    this.added.emit(false);
  }
  close(){
     this.closing.emit(true);
  }

  submitAddingPromotion(){
   this.promotionService.createItem(this.Promotion).subscribe(data => {
       this.promotionService.AssignProductssToPack(data.id,this.produitselected.id).subscribe(data => {
         console.log(data);
         
         this.added.emit(true);
         this.closing.emit(true);
         
       })
   })
   
  }

  
  produitselectedd(event){
this.produitselected = event ;
console.log("********")
console.log(this.produitselected);
  }
  

}
