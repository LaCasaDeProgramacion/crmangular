import { HttpClientModule } from '@angular/common/http';
import { ApiStore } from "src/app/services/stores/apistore.service";
import { OnInit, Component, ViewChild } from "@angular/core";
import { store } from "src/app/entities/stores";
import { AngularFireStorage } from "@angular/fire/storage";
import { ImageUploadComponent } from 'src/app/SharedComponent/image-upload/image-upload.component';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {
stores: store[];
  sto: store= new store();
  store_name:any;
  public picturemap:string;
  selectedFile = null;

  @ViewChild(ImageUploadComponent)
  private testComponent : ImageUploadComponent;
  constructor(private StoresService : ApiStore, private storage: AngularFireStorage, private http: HttpClientModule) {

  }

 ngOnInit() {

 }
 onSubmit() {


  //this.produit.store.store_id=1;
  this.StoresService.addStore(this.sto)
    .subscribe( data => {
     console.log("added")
    });
}
checkduplicated()
{
  let duplicate = this.stores.filter(item => item.store_name === this.store_name );
  if (duplicate.length > 0) {
    console.log("Duplicated!");
    return;
  }
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
          this.sto.store_image =this.picturemap;
          this.StoresService.addStore(this.sto)
          .subscribe( data => {
           console.log("added")
          });

        })
      })
    ).subscribe();

     //this.produit.store.store_id=1;

   }

}
