import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageUploadComponent } from 'src/app/SharedComponent/image-upload/image-upload.component';
import { Vehicle } from 'src/app/entities/Vehicle';
import { CarbrandService } from 'src/app/services/prospectingManagement/vehicle/carbrand.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { ImageUploadServicService } from 'src/app/SharedComponent/image-upload/image-upload-servic.service';
import { finalize } from 'rxjs/operators';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {


  @ViewChild(ImageUploadComponent)
  private testComponent : ImageUploadComponent;
  searchText;
  public formsubmitted:boolean;
  public picturemap:string;

  vehicle: Vehicle ={id:0, registration:'', color:'', picture:'', carmodel:{id:0,model:''} };
  carmodels;
  closeResult: string;
  closeResult1: string;

  constructor( private vehicleService:CarbrandService,private modalService: NgbModal,
    private router: Router, private storage: AngularFireStorage,public serviceimage:ImageUploadServicService ) {
      if (localStorage['Role']!="ADMIN")
      {
        this.router.navigate(['/home']);

      }

    }



  ngOnInit() {
    this.loadCarmodels();
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  onclickenvoyer(e , content){
    var pictureinfo :any[] =this.testComponent.handleSubmit(e);
    console.log(pictureinfo);
    var filePath = `${pictureinfo['name'].split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
    const fileRef = this.storage.ref(filePath);
    this.storage.upload(filePath, pictureinfo).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          console.log(url);
       this.picturemap=url;
          console.log(this.picturemap);
          this.vehicle.picture=this.picturemap;
    this.vehicleService.addVehicle(this.vehicle).subscribe(response => {
      console.log(response);
    });
        })
      })
    ).subscribe();

    this.open(content);
    this.router.navigate(['back/vehicles']);

  }


  loadCarmodels()
{
  try{
    this.vehicleService.getModels().subscribe(
      data => {
       this.carmodels =data;
      }
    );
  }catch(e)
  {
    console.log("loadcar Models")
  }

}
}
