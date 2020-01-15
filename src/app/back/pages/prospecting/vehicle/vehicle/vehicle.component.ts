import { EventService } from './../../../../../services/prospectingManagement/event.service';
import { ImageUploadComponent } from 'src/app/SharedComponent/image-upload/image-upload.component';
import { Carmodel } from './../../../../../entities/carmodel';
import { Component, OnInit , HostListener, ViewChild} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Vehicle } from 'src/app/entities/Vehicle';
import { CarbrandService } from 'src/app/services/prospectingManagement/vehicle/carbrand.service';
import { Router, NavigationEnd } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { ImageUploadServicService } from 'src/app/SharedComponent/image-upload/image-upload-servic.service';
import { finalize } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})

export class VehicleComponent implements OnInit {

  mySubscription: any;

  searchText;
  idToDelete;
  closeResult: string;
  closeResult1: string;
  @ViewChild(ImageUploadComponent)
  private testComponent : ImageUploadComponent;

  public formsubmitted:boolean;
  public picturemap:string;

  model : Carmodel ={id:0,  model:'', carbrand:{id:0, brand:''} };
  vehicle: Vehicle ={id:0, registration:'', color:'', picture:'', carmodel:{id:0,model:''} };

  carmodels;


  collection = { count: null, vehicles:null  };
  config:any;
  events ;
  idVehicule;


  constructor(private modalService: NgbModal, private vehicleService:CarbrandService,
    private eventService:EventService,
    private router: Router, private storage: AngularFireStorage,public serviceimage:ImageUploadServicService ) {

      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      this.mySubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
               this.router.navigated = false;
           }
      });

      this.loadCarmodels();
      this.loadVehicles();
      if (localStorage['Role']!="ADMIN")
      {
        this.router.navigate(['/home']);

      }

    }
    ngOnDestroy() {
      if (this.mySubscription) {
        this.mySubscription.unsubscribe();
      }
    }

    vehicleForm = new FormGroup(
      {
        'model' : new FormControl(),
        'color' : new FormControl(),
        'registration' : new FormControl(),
      });

      get getModel(){
        return this.vehicleForm.get('model');
      }
      get getColor(){
        return this.vehicleForm.get('color');
      }
      get getRegistration(){
        return this.vehicleForm.get('registration');
      }
//update Vehicle
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

save(value)
{
  console.log(value)
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

loadVehicles()
{

   this.vehicleService.getVehicles().subscribe(
     data => {
      this.collection.vehicles =data;
     }
   );
   this.config = {
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: this.collection.count
  };
}
pageChanged(event){
  this.config.currentPage = event;
}

delete()
{
  this.vehicleService.DeleteVehicle(this.idToDelete).subscribe(
   response=>
   {
    this.loadVehicles();
   }
  );
  this.modalService.dismissAll();
}
update(v:Vehicle )
{
  console.log( )
  this.vehicleService.updateVehicle(v).subscribe(data=>
    this.loadVehicles()
    )
    this.loadVehicles();

 }

  onclickenvoyer(e){
  console.log(e)
  this.testComponent.message();
  var pictureinfo :any[] =this.testComponent.handleSubmit(e);
  console.log(pictureinfo);
  var info: Vehicle ={ registration:'', color:'', picture:'', carmodel:{id:0,model:''} };

  info.registration=this.getRegistration.value;
  info.color=this.getColor.value;
  info.carmodel.model = this.getModel.value;

  var filePath = `${pictureinfo['name'].split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
  const fileRef = this.storage.ref(filePath);
  this.storage.upload(filePath, pictureinfo).snapshotChanges().pipe(
    finalize(() => {
      fileRef.getDownloadURL().subscribe((url) => {
        console.log(url);
     this.picturemap=url;
        console.log(this.picturemap);
        info.picture=this.picturemap;
  this.vehicleService.addVehicle(info).subscribe(response => {
    console.log(response);
    this.loadVehicles();
    this.formsubmitted=true;


  });
  this.loadVehicles();
      })
    })
  ).subscribe();
  this.loadVehicles();

  console.log(info);
}
ngOnInit(){
  this.formsubmitted=false;
 this.loadCarmodels();
 this.loadVehicles();

}
openarchive(content,id) {

  this.idToDelete=id;
     this.modalService.open(content,{ariaLabelledBy: 'modal1-title-notification'}).result.then((result) => {
       this.closeResult = `Closed with: ${result}`;
     }, (reason) => {
       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
     });
   }


LoadEventsForVeh(idVehicle)
{
  this.eventService.EventsForVeh(idVehicle).subscribe(
    data=> {
      this.events= data ;
    }
  )
}
openReser(content, id) {
  this.idVehicule = id ;
  this.LoadEventsForVeh(this.idVehicule);

  console.log( "id++++++++", this.idVehicule)
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

redirection(id)
{
  this.modalService.dismissAll();
  this.router.navigate(['back/details-event/'+id]);
}

reserver (idEvent, content )
{

  console.log("ID EVENT " + idEvent + "  ID Vehicule "+ this.idVehicule)
  this.vehicleService.affecterVehicule(idEvent, this.idVehicule).subscribe(data =>
    {console.log(data),
      this.LoadEventsForVeh(this.idVehicule);
    });
  this.LoadEventsForVeh(this.idVehicule);
  this.modalService.dismissAll();
  this.open(content);

}

}
