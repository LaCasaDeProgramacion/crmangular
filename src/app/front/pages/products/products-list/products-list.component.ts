import { product } from 'src/app/entities/product';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/products/api.service';

@Component({
  selector: 'app-products-list-front',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  //productList: product[];
	productList: any[];
	loading = false;
	brands = ['All', 'Internet','Smartphones'];

	selectedBrand: 'All';
  searchText;
	page = 1;
  constructor(private productService : ApiService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (Data) => {
        this.productList = Data ;
        console.log("products"+Data);
      }
     )

  }

}
