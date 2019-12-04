import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ImageUploadComponent } from 'src/app/SharedComponent/image-upload/image-upload.component';
import { Pack } from 'src/app/entities/Pack';
import { FormGroup, FormControl } from '@angular/forms';
import { PackService } from 'src/app/services/Pack/pack.service';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { ImageUploadServicService } from 'src/app/SharedComponent/image-upload/image-upload-servic.service';
import { stringify } from 'querystring';
import { product } from 'src/app/entities/product';
import { ApiService } from 'src/app/services/products/api.service';

@Component({
  selector: 'app-add-pack',
  templateUrl: './add-pack.component.html',
  styleUrls: ['./add-pack.component.scss']
})
export class AddPackComponent implements OnInit {
  @ViewChild(ImageUploadComponent)
  private testComponent : ImageUploadComponent;
  //product list to assign
  public productList:any[];
  public productlistToAddtoPack:product[]=[];
  public productids:number[]=[];
  public packidtoaddproduct:number;
  public formsubmitted:boolean;
  //hide bool test :
 hideproducts:boolean;
  //length
  lengthlist:number;
  //check
  state_icon_danger = true;
public picturemap:string;
public packtitle:string;

theCheckbox:boolean=false;
constructor(public packservice: PackService,public productService:ApiService,private storage: AngularFireStorage,public serviceimage:ImageUploadServicService) { }

ngOnInit() {
this.packtitle='Pack';
this.getlistProducttoassign();
this.hideproducts=true;
this.formsubmitted=false;
}
packForm = new FormGroup(
  { 
 
    'title' : new FormControl(),
    'description' : new FormControl(),
    'image' : new FormControl(),
    'datefrom' : new FormControl(),
    'dateuntil' : new FormControl()
  });
  get gettitle(){
    return this.packForm.get('title');
  }
  get getdescription(){
    return this.packForm.get('description');
  }
  get getpicture(){
    return this.packForm.get('image');
  }
  get getdatefrom(){
    return this.packForm.get('datefrom');
  }
  get getdateuntil(){
    return this.packForm.get('dateuntil');
  }
onclickenvoyer(e){
  var pictureinfo :any[] =this.testComponent.handleSubmit(e);
  console.log(pictureinfo);
  
  var info:Pack={title:'',description:'', picture:'', validfrom:null, validuntil:null};
  info.title=this.gettitle.value;
  info.description=this.getdescription.value;


  var filePath = `${pictureinfo['name'].split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
  const fileRef = this.storage.ref(filePath);
  this.storage.upload(filePath, pictureinfo).snapshotChanges().pipe(
    finalize(() => {
      fileRef.getDownloadURL().subscribe((url) => {
        console.log(url);
     this.picturemap=url;
        console.log(this.picturemap);
        info.picture=this.picturemap;
        info.validfrom=this.getdatefrom.value;
  info.validuntil=this.getdateuntil.value;
  this.packservice.createItem(info).subscribe(response => {
    console.log(response);
    this.packtitle=this.gettitle.value;
    //toassignproducts
    this.packidtoaddproduct=response['id'];
    this.formsubmitted=true;
    this.theCheckbox=true;

  });
      })
    })
  ).subscribe();
  
  console.log(info);
}
getlistProducttoassign(){
  this.productService.getProducts().subscribe(
    (Data) => {
      this.productList = Data ;
      
      console.log("products"+Data);
    }
   )
}
clickaddtopack(product){
  if(this.productlistToAddtoPack.find(ob => ob['id'] === product.id)== null){
  this.productlistToAddtoPack.push(product);
  product.waeldisplayattributtest=true;
  console.log(this.productlistToAddtoPack);
  }else {
    console.log("already ADDED");
  }
  this.lengthlist=this.productlistToAddtoPack.length;
}
Removefrompack(product){
  let index = this.productlistToAddtoPack.indexOf(product);
   this.productlistToAddtoPack.splice(index,1);
    product.waeldisplayattributtest=false;
    console.log(this.productlistToAddtoPack);
    this.lengthlist=this.productlistToAddtoPack.length;
    
}
toggleVisibility(){
this.hideproducts=!this.hideproducts;
}

AssignproductstoPack(){
  if(this.productlistToAddtoPack.length>=1 && this.formsubmitted){
    for(let i of this.productlistToAddtoPack){
      this.productids.push(i.id);
    }
this.packservice.AssignProductssToPack(this.packidtoaddproduct,this.productids).subscribe(
  (Data) => {

    
    console.log(Data);
  });
      }

  } 


}
