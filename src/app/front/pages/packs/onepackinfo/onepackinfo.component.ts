import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pack } from 'src/app/entities/Pack';
import { PackService } from 'src/app/services/Pack/pack.service';
import { PromotionServiceService } from 'src/app/services/promotion/promotion-service.service';
import { StarService } from 'src/app/services/star.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-onepackinfo',
  templateUrl: './onepackinfo.component.html',
  styleUrls: ['./onepackinfo.component.scss']
})
export class OnepackinfoComponent implements OnInit {
   Packs: any;
   Pack:Pack = {};
   promotionlist:any;
   public userId;
   public movieId;
   packname:string;
   stars: Observable<any>;
   avgRating: Observable<any>;
  constructor(private route: ActivatedRoute,public servicepack:PackService,public promotionService:PromotionServiceService,private starService: StarService) { }

  ngOnInit() {
    this.userId = 1; // a changé avec nom user 
    this.getPackfromRoute();
    console.log("---------------------------")
    console.log(this.Pack)
    console.log("---------------------------")
    console.log(this.stars)
  }
  getPackfromRoute (){
this.servicepack.getListavailablepacks().subscribe((data) => 
 { 
 
   this.Packs = [];
   this.Packs = data;
   console.log(this.Packs)
   this.Packs.forEach((p: Pack) => {
    if (p.id == this.route.snapshot.params.id) {
      this.Pack = p;
       this.packname = p.title;
    }
  })
  this.stars = this.starService.getMovieStars(this.Pack.id);
  this.movieId = this.Pack.id;
  console.log(this.stars)
     this.avgRating = this.stars.pipe(map(arr => {
  const ratings = arr.map(v => v.value)
     return ratings.length ? ratings.reduce((total, val) => total + val) / arr.length : 'not reviewed'
    
    })); 
    this.Pack.avgRatingpack =this.avgRating;
    
  this.promotionlist =[];
  for(let prod of this.Pack.products){
    prod.producthavepromotion = false;
  }
  this.promotionService.getListAssignedPromotion().subscribe(dat => {
       console.log(dat)
       this.promotionlist = dat;
       for(let promotion of this.promotionlist){
          for(let product of this.Pack.products){
            if(promotion.product.id === product.id){
              
              product.productnewvalue = promotion.productnewvalue;
              product.producthavepromotion =true;
              console.log(product)
            }
            
          }
       }
   

  })
 });

}
 
  getstyle(picture){
    return {
      'background-image':'url('+picture+')' ,
      'background-size': 'cover',
      'background-position': 'center'
  
    }

  }
  starHandler(value,item) {
   
  this.starService.setStar(this.userId, this.movieId, value)
}

}
