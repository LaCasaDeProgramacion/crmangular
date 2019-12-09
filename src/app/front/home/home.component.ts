import { ApiService } from 'src/app/services/products/api.service';
import { EventService } from './../../services/prospectingManagement/event.service';
import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/entities/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss',
'./home.component.css']
})
export class HomeComponent implements OnInit {
productList: product[];
  Events ;
  Event1 ;
  Event2 ;
  Event3 ;
  Event4 ;
  nb=0;
  constructor(private eventService:EventService,private productService: ApiService) {
    this.loadEvents();
   }
   src= "https://firebasestorage.googleapis.com/v0/b/angulargalery.appspot.com/o/DSC_2317_1575812352817?alt=media&token=c4b0bf4f-4fd6-4257-8682-e1381d1b1fa2";
   loadEvents ()
   {
     this.eventService.get().subscribe(data=>
       {
         this.Events=data;
         this.Events.forEach(element => {
         console.log(this.nb)
           if (this.nb==0)
           {
             this.Event1 = element;
           }
           if (this.nb==1)
           {
             this.Event2 = element;
           }
           if (this.nb ==2)
           {
             this.Event3 = element;
           }
           if (this.nb ==3)
           {
             this.Event4 = element;
           }
           this.nb++;
         });

       });

   }
  ngOnInit() {
    this.TopViewedProducts();
  }
  TopViewedProducts(){
    this.productService.getTopViewedProducts().subscribe(
      (Data) => {
        this.productList = Data ;
        console.log(Data);


      })

  }
}
