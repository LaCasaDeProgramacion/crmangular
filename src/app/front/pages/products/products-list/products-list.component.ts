import { product } from 'src/app/entities/product';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/products/api.service';
import { PromotionServiceService } from 'src/app/services/promotion/promotion-service.service';

@Component({
  selector: 'app-products-list-front',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  promotionlist :any[];
  //productList: product[];
	productList: any[];
	loading = false;
	brands = ['All', 'Internet','Smartphones'];

	selectedBrand: 'All';
  searchText;
	page = 1;
  constructor(private productService : ApiService,private promotionService : PromotionServiceService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (Data) => {
        this.productList = Data ;
     
        for(let prod of this.productList){
          prod.producthavepromotion = false;
        }
        this.promotionService.getListAssignedPromotion().subscribe(data => {
             console.log(data)
             this.promotionlist = data;
             for(let promotion of this.promotionlist){
                for(let product of this.productList){
                  if(promotion.product.id === product.id){
                    
                    product.productnewvalue = promotion.productnewvalue;
                    product.producthavepromotion =true;
                    console.log(product)
                  }
                  
                }
             }
             console.log(this.productList)

        })
      }
     )

  }

}
