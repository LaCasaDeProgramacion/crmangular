import { PagerService } from './../../../services/pager/pager.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/products/api.service';
import { product } from 'src/app/entities/product';
import { SortPipe } from 'src/app/front/pipes/sort.pipe';
import { UiService } from 'src/app/services/products/ui.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  searchText;

  constructor(private productService : ApiService, private sortPipe: SortPipe,  public uiService: UiService,  private pagerService: PagerService) { }

  ListProducts: any = [];
  detailsProduct : product ;
  productsPaged: product[];
  pro: product;
  pager: any = {};
check: any;
  ngOnInit() {

   this.populateproduct();

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


checkproduct(){
  if (this.pro.productStatus=="active") {
this.check=="checked"
}else{
  this.check=="unchecked"
}
}

populateproduct()
{
  this.productService.getProducts().subscribe(
    (Data) => {
      this.ListProducts = Data ;
      console.log("products"+Data);
    }
   )
}
}
