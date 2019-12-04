import { Component, OnInit } from '@angular/core';
import { PackService } from 'src/app/services/Pack/pack.service';
import { product } from 'src/app/entities/product';
import { ProductsPack } from 'src/app/entities/ProductsPack';
import { Pack } from 'src/app/entities/Pack';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pack',
  templateUrl: './list-pack.component.html',
  styleUrls: ['./list-pack.component.scss']
})
export class ListPackComponent implements OnInit {
  packData:any;
  closeResult: string;
  products :ProductsPack[];
  packids:any;
  productpopup:product;

   //pack to archive 
   PacktoArchive:Pack;
   //pack to update 
   public Packtoupdate:any;
  constructor(public packservice: PackService,private modalService: NgbModal,private router:Router) { this.packData=[] }

  ngOnInit() {
    this.getavalaiblePack();
  }
  getavalaiblePack() {
    //Get saved list of students
    this.packservice.getListavailablepacks().subscribe(response => {
      
      
      this.packData = response;
      console.log(this.packData);   
     
    })
  }
  open(content,prod) {
     this.productpopup=prod;
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
  openarchive(content,item) {
this.PacktoArchive=item;
   this.modalService.open(content,{ariaLabelledBy: 'modal1-title-notification'}).result.then((result) => {
     this.closeResult = `Closed with: ${result}`;
   }, (reason) => {
     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
   });
 }
 archivepack(){
   console.log(this.PacktoArchive);
   //archive service
   this.packservice.archivepack(this.PacktoArchive.id).subscribe(data => {console.log(data)});
   this.modalService.dismissAll();
   this.getavalaiblePack();
 }
 UpdatePack(item){
 this.Packtoupdate =item;
 console.log(this.Packtoupdate);
 localStorage.setItem('packtoupdate',JSON.stringify(item));
 this.router.navigate(["back/updatepack"]);
 }
 senditemtoupdate(item){
  this.Packtoupdate =item;
  console.log(this.Packtoupdate);
  localStorage.setItem('packtoupdate',JSON.stringify(item));
 }




}
