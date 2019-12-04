import { Component, OnInit,OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { product } from 'src/app/entities/product';
import { ApiService } from 'src/app/services/products/api.service';

import { pickerentity } from 'src/app/entities/pickerentity';
import { PromotionServiceService } from 'src/app/services/promotion/promotion-service.service';

@Component({
  selector: 'app-selectbootstrap',
  templateUrl: './selectbootstrap.component.html',
  styleUrls: ['./selectbootstrap.component.scss']
})
export class SelectbootstrapComponent implements OnInit {
  
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  public arrayidnom:pickerentity[];
  public productsalreadyassigned:pickerentity[];
 public listproduit:any;
 @Input() productforupdatete:product;
  @Output() produitselected = new EventEmitter<product>();
  constructor(public productService:ApiService,public promotionService:PromotionServiceService) { }

  ngOnInit() {
  this.listproduit = [];
   this.getlistProducttoassign();
   
   //   this.dropdownList = this.listproduit ; 
      console.log(this.dropdownList);
   
      this.selectedItems = [
                          ];
      this.dropdownSettings = {
                                singleSelection: false,
                                text:"Multiple Select",
                                selectAllText:'Select All',
                                unSelectAllText:'UnSelect All',
                                enableSearchFilter: true,
                                classes:""
                              };

    
  }
  
  onItemSelect(item:any){
      console.log(item);
      console.log(this.selectedItems);
     
        this.produitselected.emit(this.selectedItems[0]);
      
  }
  OnItemDeSelect(item:any){
      console.log(item);
      console.log(this.selectedItems);
  }
  onSelectAll(items: any){
      console.log(items);
  }
  onDeSelectAll(items: any){
      console.log(items);
  }
  getlistProducttoassign(){
    this.productService.getProducts().subscribe(
      (Data) => {

this.promotionService.getListAssignedPromotion().subscribe(
  (data) => {
    this.productsalreadyassigned = [];
  
    data.map(o => {
      return { id: o.product.id, productName: o.product.productName };
      
    }).forEach(item => this.productsalreadyassigned.push({id:item.id,itemName: item.productName }));  //
    console.log("*****************")
    console.log(this.productsalreadyassigned)
  

        this.arrayidnom = [];

        Data.map(o => {
          return { id: o.id, productName: o.productName };
        }).forEach(item => this.arrayidnom.push({id:item.id,itemName: item.productName }));  //
     //  this.dropdownList = this.arrayidnom;
     console.log(this.arrayidnom)
        var res = this.arrayidnom.filter(item1 => 
          !this.productsalreadyassigned.some(item2 => (item2.id === item1.id && item2.itemName === item1.itemName)))
          
          console.log(res);
          for(let i of res){
            this.dropdownList.push(i);
          }
          if(this.productforupdatete){
          this.dropdownList.push({id:this.productforupdatete.id,itemName: this.productforupdatete.productName });
          this.selectedItems.push({id:this.productforupdatete.id,itemName: this.productforupdatete.productName });
          this.produitselected.emit(this.selectedItems[0]);
        }
        })}
     )
  }

}
