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
  isChecked: any;
  checkedValue:boolean;
  constructor(private productService : ApiService, private sortPipe: SortPipe,  public uiService: UiService,  private pagerService: PagerService) { }
  ListInactiveProducts: any = [];
  ListProducts: any = [];
  detailsProduct : product ;
  productsPaged: product[];
  pro: product;
  pager: any = {};
  checkedValueInactive:boolean;
check: any;
checkbox:any;
  ngOnInit() {

   this.populateproduct();
this.populateInactiveProducts();
this.checkedValueInactive= false;
this.checkedValue= true ;
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

setToActive(id) {
  if (window.confirm('Are you sure, you want to Update?')){
    this.productService.SetToActive(id).subscribe(data => {
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

populateInactiveProducts()
{
  this.productService.getInactiveProducts().subscribe(
    (Data) => {
      this.ListInactiveProducts = Data ;
      console.log("products"+Data);
    }
   )
}
changed(evt){
  this.isChecked = evt.target.checked;
}


}
