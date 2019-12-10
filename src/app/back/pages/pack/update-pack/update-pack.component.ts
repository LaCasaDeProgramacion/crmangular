import { Component, OnInit, ViewChild } from '@angular/core';
import { ListPackComponent } from '../list-pack/list-pack.component';
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
  selector: 'app-update-pack',
  templateUrl: './update-pack.component.html',
  styleUrls: ['./update-pack.component.scss']
})
export class UpdatePackComponent implements OnInit {
 

  packtoupdate:any;
  packupdateolditem:Pack;
  @ViewChild(ImageUploadComponent)
  private testComponent : ImageUploadComponent;
  //product list to assign
  public productList:any[];
  public productlistToAddtoPack:product[];
  public productids:number[]=[];
  public productsfromDATA:product[]=[];

  //clearinglist
  public prodlistToAddtoPack:product[];
  
  public formsubmitted:boolean;
  //hide bool test :
 hideproducts:boolean;
 theCheckbox:boolean=true;
  //length
  lengthlist:number;
  //check
  state_icon_danger = true;
public picturemap:string;
public packtitle:string;
constructor(public packservice: PackService,public productService:ApiService,private storage: AngularFireStorage,public serviceimage:ImageUploadServicService) { }

ngOnInit() {
  this.productlistToAddtoPack=[];
  this.productList=[];
  this.packtoupdate=localStorage.getItem('packtoupdate');
  console.log(this.packtoupdate.picture)
this.packupdateolditem= JSON.parse(this.packtoupdate);

this.packForm.controls['title'].setValue(this.packupdateolditem.title);
this.packForm.patchValue({description:this.packupdateolditem.description });;
this.packForm.controls['datefrom'].setValue(this.packupdateolditem.validfrom);
this.packForm.controls['dateuntil'].setValue(this.packupdateolditem.validuntil);

this.getlistProducttoassign();
this.packtitle='Pack';

this.hideproducts=false;
this.formsubmitted=true;
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
  
  var info:Pack={id:null,title:'',description:'', picture:'', validfrom:null, validuntil:null};
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
        info.title=this.gettitle.value;
        info.description=this.getdescription.value;
        info.picture=this.picturemap;
        info.validfrom=this.getdatefrom.value;
  info.validuntil=this.getdateuntil.value;
  info.id=this.packupdateolditem.id;
  if(this.productlistToAddtoPack.length>=1 && this.formsubmitted){
    for(let i of this.productlistToAddtoPack){
      this.productids.push(i.id);
    }
    ///finish update here
    this.packservice.updatepack(info,this.productids).subscribe(response => {
      console.log(response);
          
    });
  }
  
      })
    })
  ).subscribe();
  
  console.log(info);
}
getlistProducttoassign(){

  this.productService.getProducts().subscribe(
    (Data) => {
  for(let i of this.packupdateolditem.products){
    i.waeldisplayattributtest =true;
    this.productlistToAddtoPack.push(i);
    this.productList.push(i);
      }
      console.log("************initialisation de prod listto addto pack***************");
              console.log(this.productlistToAddtoPack);
              console.log(this.productList); 
              this.productsfromDATA = Data;
              for(let i of this.productsfromDATA){
                i.waeldisplayattributtest=false;
              }
              var res = this.productsfromDATA.filter(item1 => 
                !this.productList.some(item2 => (item2.id === item1.id && item2.productName === item1.productName)))
                
                console.log(res);
                for(let i of res){
                  this.productList.push(i);
                }
                     

    
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


  









}
