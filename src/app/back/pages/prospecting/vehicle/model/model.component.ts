import { Carbrand } from './../../../../../entities/carbrand';
import { Carmodel } from './../../../../../entities/carmodel';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CarbrandService } from 'src/app/services/prospectingManagement/vehicle/carbrand.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {
  searchText;
  carbrands ;
  brand :Carbrand={ brand:''};

  collection = { count: null, carmodels:null  };
  config:any;

  model : Carmodel ={id:0,  model:'', carbrand:{id:0, brand:''} };
  Modeltodelete : Carmodel ={id:0,  model:'', carbrand:{id:0, brand:''} };
  carbrand : Carbrand= {id:0, brand:''};
  closeResult: string;
  closeResult1: string;

  constructor(private modalService: NgbModal,
    private carbrandService:CarbrandService,
    private router: Router) {}

    pageChanged(event){
      this.config.currentPage = event;
      if (localStorage['Role']!="ADMIN")
      {
        this.router.navigate(['/home']);

      }

    }
//update Modal
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
//update Modal
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
   ngOnInit() {
    this.loadCarBrands();
    this.loadCarmodels();
  }
  loadCarBrands()
  {
     this.carbrandService.getBrands().subscribe(
       data => {
        this.carbrands = data;
       }
     );
  }

  loadCarmodels()
  {
     this.carbrandService.getModels().subscribe(
       data => {
        this.collection.carmodels =data;
       }
     );
     this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }

  openarchive(content,id) {

    this.Modeltodelete.id=id;
       this.modalService.open(content,{ariaLabelledBy: 'modal1-title-notification'}).result.then((result) => {
         this.closeResult = `Closed with: ${result}`;
       }, (reason) => {
         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
       });
     }
  deleteModel()
  {
    this.carbrandService.DeleteModel(this.Modeltodelete.id).subscribe(
     response=>
     {
      this.loadCarmodels();
     }
    );
    this.modalService.dismissAll();
  }
  updateModel(model, id)
  {

    console.log("************* model "+model + "  " + id )
    this.carbrandService.updateModel(model, id).subscribe(data=>
      this.loadCarmodels()
      )
      this.loadCarmodels();
      this.modalService.dismissAll();
   }
  onSubmit(){
    this.model.carbrand = this.carbrand ;
    console.log("Model ",  this.model.model + " "+ this.model.carbrand.id)
    this.carbrandService.addModel(this.model).subscribe(
      response =>
      {
        console.log("added")
        this.carbrandService.getBrands().subscribe(
          data=> this.loadCarmodels()
          );
      }
    )

    this.modalService.dismissAll();
  }

}
