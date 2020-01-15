import { Component, OnInit } from '@angular/core';
import { PackService } from 'src/app/services/Pack/pack.service';
import { product } from 'src/app/entities/product';
import { ProductsPack } from 'src/app/entities/ProductsPack';
import { Pack } from 'src/app/entities/Pack';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { StatPack } from 'src/app/entities/StatPack';
import { StatPackService } from 'src/app/services/statpack/stat-pack.service';
import Chart from 'chart.js';
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../../variables/charts";

@Component({
  selector: 'app-list-pack',
  templateUrl: './list-pack.component.html',
  styleUrls: ['./list-pack.component.scss']
})
export class ListPackComponent implements OnInit {
   //statt
   public clicked: boolean = true;
   public clicked1: boolean = false;
   public salesChart;
   public datasets: any;
   public data: any;

  BestpackforToday:StatPack;
  mostgainmoneystatpack:StatPack;
  PackoftheMonth:StatPack;
  SelledQuantitypacktoday:StatPack;
  SelledQuantitypacktodayTITLE:string;
  PackoftheMonthTITLE:string;
  mostgainmoneystatpackTITLE:string;
  BestpackforTodayTITLE:string;
  packData:any;
  closeResult: string;
  products :ProductsPack[];
  packids:any;
  productpopup:product;

   //pack to archive 
   PacktoArchive:Pack;
   //pack to update 
   public Packtoupdate:any;
  constructor(public packservice: PackService,private modalService: NgbModal,private router:Router,public statservice:StatPackService) { this.packData=[] }

  ngOnInit() {
    this.getavalaiblePack();
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
