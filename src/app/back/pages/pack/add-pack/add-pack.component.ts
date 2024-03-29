import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ImageUploadComponent } from 'src/app/SharedComponent/image-upload/image-upload.component';
import { Pack } from 'src/app/entities/Pack';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PackService } from 'src/app/services/Pack/pack.service';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { ImageUploadServicService } from 'src/app/SharedComponent/image-upload/image-upload-servic.service';
import { stringify } from 'querystring';
import { product } from 'src/app/entities/product';
import { ApiService } from 'src/app/services/products/api.service';
import { StatPack } from 'src/app/entities/StatPack';
import { StatPackService } from 'src/app/services/statpack/stat-pack.service';

@Component({
  selector: 'app-add-pack',
  templateUrl: './add-pack.component.html',
  styleUrls: ['./add-pack.component.scss']
})
export class AddPackComponent implements OnInit {
  hideerror:boolean=false;
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
BestpackforToday:StatPack;
  mostgainmoneystatpack:StatPack;
  PackoftheMonth:StatPack;
  SelledQuantitypacktoday:StatPack;
  SelledQuantitypacktodayTITLE:string;
  PackoftheMonthTITLE:string;
  mostgainmoneystatpackTITLE:string;
  BestpackforTodayTITLE:string;
theCheckbox:boolean=false;
constructor(public packservice: PackService,public productService:ApiService,private storage: AngularFireStorage,public serviceimage:ImageUploadServicService,public statservice:StatPackService) { }

ngOnInit() {
this.packtitle='Pack';
this.getlistProducttoassign();
this.hideproducts=true;
this.formsubmitted=false;
   //stat
   this.getBestpackforToday();
   this.getmostgainmoneystatpack();
   this.getPackoftheMonth();
   this.getSelledQuantitypacktoday();
}
getSelledQuantitypacktoday(){
  this.SelledQuantitypacktoday = {};
  this.statservice.getSelledQuantitypacktoday().subscribe(response => {
    this.SelledQuantitypacktoday = response;
    this.SelledQuantitypacktodayTITLE = response.pack.title;
})
}
getPackoftheMonth(){
  this.PackoftheMonth = {};
  this.statservice.getPackoftheMonth().subscribe(response => {
    this.PackoftheMonth = response;
    this.PackoftheMonthTITLE = response.pack.title;
})
}
getmostgainmoneystatpack(){
  this.mostgainmoneystatpack = {} ; 
  this.statservice.getmostgainmoneystatpack().subscribe(response => {
    this.mostgainmoneystatpack = response;
    this.mostgainmoneystatpackTITLE = response.pack.title;
})
}
getBestpackforToday(){
  this.BestpackforToday = {};
  this.statservice.getBestpackforToday().subscribe(response => {
      this.BestpackforToday = response;
      this.BestpackforTodayTITLE = response.pack.title;
  })
}
packForm = new FormGroup(
  {

    'title' : new FormControl('', [Validators.required, Validators.minLength(3)]),
    'description' : new FormControl(),
    'image' : new FormControl(),
    'datefrom' : new FormControl('', [Validators.required]),
    'dateuntil' : new FormControl('', [Validators.required])
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
  error:any={isError:false,errorMessage:''};

compareTwoDates(){
   if(new Date(this.packForm.controls['dateuntil'].value)<new Date(this.packForm.controls['datefrom'].value)){
      this.error={isError:true,errorMessage:'Until Date cant Before From Date'};
     this.packForm.hasError;
   }
}


onclickenvoyer(e){
  this.testComponent.message()
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
