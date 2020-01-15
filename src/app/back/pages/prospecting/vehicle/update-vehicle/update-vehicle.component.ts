import { Vehicle } from './../../../../../entities/Vehicle';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageUploadComponent } from 'src/app/SharedComponent/image-upload/image-upload.component';
import { CarbrandService } from 'src/app/services/prospectingManagement/vehicle/carbrand.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { ImageUploadServicService } from 'src/app/SharedComponent/image-upload/image-upload-servic.service';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.scss']
})
export class UpdateVehicleComponent implements OnInit {

  @ViewChild(ImageUploadComponent)
  private testComponent : ImageUploadComponent;
  public picturemap:string;
  img="https://www.autoscout24.fr/assets/auto/images/model-finder/mercedes-benz/mercedes-benz-a-klasse-xs.jpg";

  closeResult: string;
  closeResult1: string;

  vehicle: Vehicle ={id:0, registration:'', color:'', picture:'', carmodel:{id:0,model:''} };
  id;
  carmodels;

  constructor( private vehicleService:CarbrandService,private modalService: NgbModal,
    private router: Router, private storage: AngularFireStorage,
    public serviceimage:ImageUploadServicService , private route: ActivatedRoute ) {

      this.route.paramMap.subscribe(params => {
        this.id = params.get("id")
      });

      this.loadCarmodels();
      this.loadVehicle(this.id);
      if (localStorage['Role']!="ADMIN")
      {
        this.router.navigate(['/home']);

      }

    }

  ngOnInit() {
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

  loadVehicle(id)
  {
    this.vehicleService.getVehiclePerId(id).subscribe(data =>
      {
        this.vehicle= data ;
      })
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
    this.vehicleService.updateVehicle(this.vehicle).subscribe(response => {
      console.log(response);
    });
        })
      })
    ).subscribe();

    this.open(content);
    this.router.navigate(['back/vehicles']);

  }




}
