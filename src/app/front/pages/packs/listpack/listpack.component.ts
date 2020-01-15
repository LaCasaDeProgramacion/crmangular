import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pack } from 'src/app/entities/Pack';
import { PackService } from 'src/app/services/Pack/pack.service';
import { StarService } from 'src/app/services/star.service';
import { map } from 'rxjs/operators';
import { StatPackService } from 'src/app/services/statpack/stat-pack.service';
import { StatPack } from 'src/app/entities/StatPack';

@Component({
  selector: 'app-listpack',
  templateUrl: './listpack.component.html',
  styleUrls: ['./listpack.component.scss']
})
export class ListpackComponent implements OnInit {
  public shopItems$: Observable<Pack[]>;
  public filterBy;
   packData:any;
  public userId;
  public movieId;
  stars: Observable<any>;
  avgRating: Observable<any>;
  BestpackforToday:Pack;
  mostgainmoneystatpack:Pack;
  PackoftheMonth:Pack;
  SelledQuantitypacktoday:Pack;
  SelledQuantitypacktodayTITLE:string;
  PackoftheMonthTITLE:string;
  mostgainmoneystatpackTITLE:string;
  BestpackforTodayTITLE:string;
  constructor(public packservice:PackService,private starService: StarService,public statservice:StatPackService) { }

  ngOnInit() {
    this.getavalaiblePack();
    
    this.userId = 2;
   //  this.getreviewsavg();
   this.getSelledQuantitypacktoday();
   this.getPackoftheMonth();
this.getmostgainmoneystatpack();
this.getBestpackforToday();
  }
  getSelledQuantitypacktoday(){
    this.SelledQuantitypacktoday = {};
    this.statservice.getSelledQuantitypacktoday().subscribe(response => {
      this.SelledQuantitypacktoday = response.pack;
      this.SelledQuantitypacktodayTITLE = response.pack.title;
  })
  }
  getPackoftheMonth(){
    this.PackoftheMonth = {};
    this.statservice.getPackoftheMonth().subscribe(response => {
      this.PackoftheMonth = response.pack;
      this.PackoftheMonthTITLE = response.pack.title;
  })
  }
  getmostgainmoneystatpack(){
    this.mostgainmoneystatpack = {} ; 
    this.statservice.getmostgainmoneystatpack().subscribe(response => {
      this.mostgainmoneystatpack = response.pack;
      this.mostgainmoneystatpackTITLE = response.pack.title;
  })
  }
  getBestpackforToday(){
    this.BestpackforToday = {};
    this.statservice.getBestpackforToday().subscribe(response => {
        this.BestpackforToday = response.pack;
        this.BestpackforTodayTITLE = response.pack.title;
    })
  }
  getreviewsavg (){
    for(let pack of this.packData){
    this.stars = this.starService.getMovieStars(pack.id);
    console.log(this.stars)
       this.avgRating = this.stars.pipe(map(arr => {
    const ratings = arr.map(v => v.value)
       return ratings.length ? ratings.reduce((total, val) => total + val) / arr.length : 'not reviewed'
      
      })); 
      pack.avgRatingpack =this.avgRating;
 
    }
  }
  getavalaiblePack() {
    //Get saved list of students
    this.packservice.getListavailablepacks().subscribe(response => {
      
      
      this.packData = response;
      console.log(this.packData); 
      for(let p of this.packData){
        p.integratedprice =p.integratedprice.toFixed(2);

        this.stars = this.starService.getMovieStars(p.id);
        console.log(this.stars)
           this.avgRating = this.stars.pipe(map(arr => {
        const ratings = arr.map(v => v.value)
           return ratings.length ? ratings.reduce((total, val) => total + val) / arr.length : 'not reviewed'
          
          })); 
          p.avgRatingpack =this.avgRating;
      } 
     
    })
  }
  

  /*
  @Input() userId;
  @Input() movieId;

  stars: Observable<any>;
  avgRating: Observable<any>;

  constructor(private starService: StarService) { }

  ngOnInit() {
    this.stars = this.starService.getMovieStars(this.movieId)
 console.log(this.stars)
    this.avgRating = this.stars.pipe(map(arr => {
 const ratings = arr.map(v => v.value)
    return ratings.length ? ratings.reduce((total, val) => total + val) / arr.length : 'not reviewed'
   }));
  }

  starHandler(value) {
    this.starService.setStar(this.userId, this.movieId, value)
  }

  */

}
