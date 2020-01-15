import { Component, OnInit } from '@angular/core';
import { PackService } from 'src/app/services/Pack/pack.service';
import { ApiService } from 'src/app/services/products/api.service';
import { Coupon } from 'src/app/entities/Coupon';
import { product } from 'src/app/entities/product';
import { Promotion } from 'src/app/entities/promotion';
import { interval } from 'rxjs';

@Component({
  selector: 'app-you-coupon',
  templateUrl: './you-coupon.component.html',
  styleUrls: ['./you-coupon.component.scss']
})
export class YouCouponComponent implements OnInit {
Coupon:Coupon;
promotion:Promotion;
product:product;
timeleft:any;
  constructor(public Couponservice:ApiService) {
    interval(1000).subscribe(x => { // will execute every 30 seconds
      this.gettime();
    });
   }

  ngOnInit() {
   this.Couponservice.getCouponByuser().subscribe(data => {
  
     this.Coupon = data;
     console.log(this.Coupon);
     this.promotion = data['promotion'];
     console.log(this.promotion);
     this.product=  data['promotion'].product;
     console.log(this.product);
   })
  }
  gettime(){
    this.Couponservice.gettimeCouponavailable().subscribe(data =>
      {
        this.timeleft = data['statusrslt'];
       
      })
  }

}
