import { CarbrandService } from './../../../../../services/prospectingManagement/vehicle/carbrand.service';
import { Carbrand } from './../../../../../entities/carbrand';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-carbrand',
  templateUrl: './carbrand.component.html',
  styleUrls: ['./carbrand.component.scss']
})
export class CarbrandComponent implements OnInit {
  constructor(private modalService: NgbModal,
    private carbrandService:CarbrandService,
    private router: Router)
    {}
  searchText;
  //carbrands ;
  carbrand :Carbrand={id:0 , brand:''};
  brand :Carbrand={ brand:''};
  closeResult: string;
  closeResult1: string;
  brandtodelete:Carbrand={id:0 , brand:''};

  collection = { count: null, carbrands:null  };
  config:any;
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

  }
  loadCarBrands()
  {
     this.carbrandService.getBrands().subscribe(
       data => {
        this.collection.carbrands = data ;
       }
     );
     this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }
  openarchive(content,id) {

    this.brandtodelete.id=id;
    console.log("+++++++++++++++"+ this.brandtodelete.id)
       this.modalService.open(content,{ariaLabelledBy: 'modal1-title-notification'}).result.then((result) => {
         this.closeResult = `Closed with: ${result}`;
       }, (reason) => {
         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
       });
     }
  deleteBrand()
  {
    console.log("**************"+this.brandtodelete.id)
    this.carbrandService.DeleteBrand(this.brandtodelete.id).subscribe(
     response=>
     {
      this.loadCarBrands();
     }
    );
    this.modalService.dismissAll();
  }
  updateBrand(brand, id)
  {
    console.log("************* brand "+brand + "  " + id )
    this.carbrandService.updateBrand(brand, id).subscribe(data=>
      this.loadCarBrands()
      )
      this.modalService.dismissAll();

  }
  onSubmit(){
    console.log("BRAND ",  this.brand.brand)
    this.carbrandService.addBrand(this.brand.brand).subscribe(
      response =>
      {
        console.log("added")
        this.carbrandService.getBrands().subscribe(
          data=> this.loadCarBrands()
          );
      }
    )
    this.modalService.dismissAll();
  }
  pageChanged(event){
    this.config.currentPage = event;
  }

}
