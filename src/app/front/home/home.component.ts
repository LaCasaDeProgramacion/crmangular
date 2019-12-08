import { ApiService } from 'src/app/services/products/api.service';
import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/entities/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss',
'./home.component.css']
})
export class HomeComponent implements OnInit {
	productList: product[];
  constructor(private productService: ApiService) { }

  ngOnInit() {
    this.TopViewedProducts();
  }
  TopViewedProducts(){
    this.productService.getTopViewedProducts().subscribe(
      (Data) => {
        this.productList = Data ;
        console.log(Data);


      })

  }
}
