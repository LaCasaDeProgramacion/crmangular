import { product } from './../../../../entities/product';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/products/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,private productService : ApiService) { }
	private sub: any;
	product: product;
  ngOnInit() {

    this.sub = this.route.params.subscribe((params) => {
			const id = params['id'];
      this.getProductDetail(id);
     // this.NumberOfViews(id);
    });

  }
  getProductDetail(id: string) {
    return this.productService.findProductbyId(id).subscribe(
      (Data) => {
        this.product = Data ;
        console.log("products"+Data);



      }

     )
  }


  NumberOfViews(id:number) {
    return this.productService.numberOfViews(id).subscribe(
      (Data) => {
        this.product = Data ;
        console.log(Data);



      }

     )
	}
}
