import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Promotion } from 'src/app/entities/Promotion';
import { ApiService } from 'src/app/services/products/api.service';
import { PromotionServiceService } from 'src/app/services/promotion/promotion-service.service';
import { product } from 'src/app/entities/product';

@Component({
  selector: 'app-update-promotion',
  templateUrl: './update-promotion.component.html',
  styleUrls: ['./update-promotion.component.scss']
})
export class UpdatePromotionComponent implements OnInit {
  public Promotion:Promotion={id:null,title:'',promotiontype:'',promotionunit:'',validfrom:null,validuntil:null};
  
  @Input() inputpromotiontoupdate:Promotion;
  @Output() closing = new EventEmitter<boolean>();
  @Output() added = new EventEmitter<boolean>();
  productotupdate:product[]=[];
   productlist:any[]=[];
   produitselected:any;
   pbool:boolean;
   constructor(public productService:ApiService,public promotionService:PromotionServiceService) { }
 
   ngOnInit() {
    this.Promotion = this.inputpromotiontoupdate;
    this.productotupdate.push(this.inputpromotiontoupdate.product);
     this.closing.emit(false);
     this.added.emit(false);
   }
   close(){
      this.closing.emit(true);
   }
 
   submitAddingPromotion(){
    this.promotionService.updatepromotion(this.Promotion,this.produitselected.id).subscribe(data => {
       console.log(data);
       this.added.emit(true);
       this.closing.emit(true);
    })
    
   }
 
   
   produitselectedd(event){
 this.produitselected = event ;
 console.log("********")
 console.log(this.produitselected);
   }
}
