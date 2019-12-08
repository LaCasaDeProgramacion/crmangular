import { store } from './../../../../entities/stores';
import { ApiStore } from './../../../../services/stores/apistore.service';
import { product } from 'src/app/entities/product';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/products/api.service';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  searchText;
  selectedstore;
  constructor( private userService: ApiService, private storeservice: ApiStore) {

  }

 // addForm: FormGroup;
 stores$: store[];
 store: store = new store();
 storeselected:number;
 store_id:number;

 produit: product= new product();
 ngOnInit() {

  this.storeservice.getStores()
  .subscribe(stores => this.stores$ = stores)

this.storeselected=1;
}


 onSubmit() {
   this.produit.productName="test";


     this.produit.store_id = this.storeselected;

   //this.produit.store.store_id=1;
   this.userService.addProduct(this.produit)
     .subscribe( data => {
      console.log(this.produit)
     });
 }

}
