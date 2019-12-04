import { ImageComponent } from './../../images/image/image.component';
import { Carmodel } from './../../../../../entities/carmodel';
import { Component, OnInit , HostListener, ViewChild} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Vehicle } from 'src/app/entities/Vehicle';
import { CarbrandService } from 'src/app/services/prospectingManagement/vehicle/carbrand.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})

export class VehicleComponent implements OnInit {

  model : Carmodel ={id:0,  model:'', carbrand:{id:0, brand:''} };
  vehicle: Vehicle ={id:0, registration:'', color:'', picture:'', carmodel:{id:0,model:''} };

  carmodels;
  vehicles;

  url='';

  closeResult: string;
  closeResult1: string;
  constructor(private modalService: NgbModal, private vehicleService:CarbrandService,
    private router: Router ) {}

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
//Add Vehicle
open1(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal1-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
private getDismissReason1(reason: any): string {
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
      this.vehicles =data;
     }
   );
}

delete(id)
{
  this.vehicleService.DeleteVehicle(id).subscribe(
   response=>
   {
    this.loadVehicles();
   }
  );
}
update(v:Vehicle )
{
  console.log( )
  this.vehicleService.updateVehicle(v).subscribe(data=>
    this.loadVehicles()
    )
    this.loadVehicles();
    this.modalService.dismissAll();
 }


onSubmit(){

 // this.getValue();
 /* this.vehicle.picture = this.url;
  this.vehicleService.addVehicle(this.vehicle).subscribe(
    response =>
    {
       console.log("added")
       this.loadVehicles();
    }
  )*/
  this.modalService.dismissAll();
}

ngOnInit(){

 this.loadCarmodels();
 this.loadVehicles();

}

}
