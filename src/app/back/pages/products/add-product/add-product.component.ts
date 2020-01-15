import { category } from 'src/app/entities/category';
import { HttpClientModule } from '@angular/common/http';
import { store } from './../../../../entities/stores';
import { ApiStore } from './../../../../services/stores/apistore.service';
import { product } from 'src/app/entities/product';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/products/api.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { ImageUploadComponent } from 'src/app/SharedComponent/image-upload/image-upload.component';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
selectedFile = null;
  ListProducts: any = [];
  searchText;
  searchTextcat;
  selectedstore;
  selectedcategory;
  public picturemap:string;
  @ViewChild(ImageUploadComponent)
  private testComponent : ImageUploadComponent;
  constructor( private userService: ApiService, private storage: AngularFireStorage,private storeservice: ApiStore, private http: HttpClientModule) {

  }

 // addForm: FormGroup;
 stores$: store[];
 categories$ :category[];
 store: store = new store();
 category:category=  new category();
 storeselected:number;
 categoryselected:number
 store_id:number;

 produit: product= new product();
 ngOnInit() {
  this.populateproduct();
  this.storeservice.getStores().subscribe(stores => this.stores$ = stores)
  this.userService.getCategories().subscribe(categories => this.categories$ = categories)
this.storeselected=1;
this.categoryselected=1;
}
populateStores(){}
populateproduct()
{
  this.userService.getProducts().subscribe(
    (Data) => {
      this.ListProducts = Data ;
      console.log(Data);
    }
   )
}
onclickenvoyer(e) {
console.log(e);
var pictureinfo :any[] =this.testComponent.handleSubmit(e);




     var filePath = `${pictureinfo['name'].split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
  const fileRef = this.storage.ref(filePath);
  this.storage.upload(filePath, pictureinfo).snapshotChanges().pipe(
    finalize(() => {
      fileRef.getDownloadURL().subscribe((url) => {
        console.log(url);
     this.picturemap=url;
        console.log(this.picturemap);
        this.produit.productImage =this.picturemap;
        this.produit.store_id = this.storeselected;
        this.produit.category_id = this.categoryselected;
        this.userService.addProduct(this.produit)
        .subscribe( data => {
         console.log(this.produit)
        });

      })
    })
  ).subscribe();

   //this.produit.store.store_id=1;

 }
  hasDuplicateDesc(ListProducts) {
  var groups = ListProducts.reduce((acc, cur) => {
    acc[cur.productName] = (acc[cur.productName] || 0) + 1;
    return acc;
  }, {});

  return Object.values(groups).some(num => num > 1);
}
verify(){
  if (this.hasDuplicateDesc(this.ListProducts)) {
    return console.log("duplicated Name")
  }
}

 reduce(){

  let res=[];
  this.ListProducts.map(function(item){
    var existItem = res.find(x=>x.productName===item.productName);
    if(existItem)
     console.log("Product Already exists");
    else
     res.push(item);
  });
  console.log(res);

}

}
