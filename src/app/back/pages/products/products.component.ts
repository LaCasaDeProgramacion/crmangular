import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/products/api.service';
import { product } from 'src/app/entities/product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  searchText;

  constructor(private productService : ApiService) { }

  ListProducts: any = [];
  detailsProduct : product ;


  ngOnInit() {

    this.productService.getProducts().subscribe(
      (Data) => {
        this.ListProducts = Data ;
        console.log("products"+Data);
      }
     )

  }

  getDetails(d )
  {
    console.log(d) ;
  }


  loadEmployees() {

    return this.productService.getProducts().subscribe((data:{})=>{
      this.ListProducts=data
    }
    )
  }
  deleteProduct(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.productService.deleteProduct(id).subscribe(data => {
        this.loadEmployees()
      })
    }
}

}
