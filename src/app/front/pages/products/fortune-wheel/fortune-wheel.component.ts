import { Response } from '@angular/http';
import { Promotion } from './../../../../entities/promotion';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/products/api.service';
import { product } from 'src/app/entities/product';
import * as d3 from 'd3-3';
import { CodeHighlighter } from 'primeng/primeng';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fortune-wheel',
  templateUrl: './fortune-wheel.component.html',
  styleUrls: ['./fortune-wheel.component.css']
})
export class FortuneWheelComponent implements OnInit {
  afficheresultat:boolean=true;
  productList: product[] =[];
  coupon:any;
  testbool:boolean=false;
 public pro: product;
  constructor(private productService : ApiService,private router: Router) { }

  ngOnInit() {
   // this.test();
    this.afficheresultat=true;
    this.Populateproduct();

  }
  test()
  {
    this.productService.AssignProductssToPack().subscribe(
      (Data) => {

        console.log(Data);
        this.pro= Data["promotion"].product;
        console.log(this.pro)

      }
     )
    }

    Populateproduct(){
      this.productService.getProducts().subscribe(
        (Data) => {
          this.productList = Data ;

          console.log("products"+Data);
        //  this.showPage();
        }
       )
       this.productService.AssignProductssToPack().subscribe(
        (Response) => {

          console.log(Response);
          if(!Response["statusrslt"]){
          this.pro= Response["promotion"].product;
        this.coupon = Response;
        }else {
          this.testbool = true;
          this.router.navigate(["home/yourCoupon"]);
        }
        console.log("tessst booool")
        console.log(this.testbool)
          console.log(this.pro)
          if(this.testbool === false){
            console.log(this.productList)
            console.log(this.testbool)
          this.showPage(this.productList,this.pro,this.coupon)
         }
        }
       )

    }
  showPage(productlist:product[],producttoget:product,coupon:any) {
    document.getElementById("off").style.display = "none";
    document.getElementById("show").style.display = "block";
    var padding = { top: 20, right: 40, bottom: 0, left: 0 },
      w = 430 - padding.left - padding.right,
      h = 430 - padding.top - padding.bottom,
      r = Math.min(w, h) / 2,
      rotation = 0,
      oldrotation = 0,
      picked = 100000,
      oldpick = [],
      color = d3.scale.category20();
//najem naamel foreach
    var data = productlist;//changement un
    console.log("productlist param")
    console.log(data)
    if(productlist.find(obj=>obj["productName"]===producttoget.productName)){
      let index=productlist.indexOf(productlist.find(obj=>obj["productName"]===producttoget.productName));
      picked = index;
    }

    var svg = d3.select("#chart")
      .append("svg")
      .data([data])
      .attr("width", w + padding.left + padding.right)
      .attr("height", h + padding.top + padding.bottom);
    var container = svg.append("g")
      .attr("class", "chartholder")
      .attr("transform", "translate(" + (w / 2 + padding.left) + "," + (h / 2 + padding.top) + ")");
    var vis = container
      .append("g");

    var pie = d3.layout.pie().sort(null).value(function (d) { return 1; });
    // declare an arc generator function
    var arc = d3.svg.arc().outerRadius(r);
    // select paths, use arc generator to draw
    var arcs = vis.selectAll("g.slice")
      .data(pie)
      .enter()
      .append("g")
      .attr("class", "slice");

    arcs.append("path")
      .attr("fill", function (d, i) { return color(i); })
      .attr("d", function (d) { return arc(d); });
    // add the text
    arcs.append("text").attr("transform", function (d) {
      d.innerRadius = 0;
      d.outerRadius = r;
      d.angle = (d.startAngle + d.endAngle) / 2;
      return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius - 10) + ")";
    })
      .attr("text-anchor", "end")
      .text(function (d, i) {
        return data[i].productName ;
      });

    container.on("click", spin);
    function spin(d) {

      container.on("click", null);

      //all slices have been seen, all done
      console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
      if (oldpick.length == data.length) {
        console.log("done");
        container.on("click", null);
        return;
      }
      var ps = 360 / data.length,
        pieslice = Math.round(1440 / data.length),
        rng = Math.floor((Math.random() * 1440) + 360);

     rotation = (Math.round(rng / ps) * ps);

      //picked = Math.round(data.length - (rotation % 360) / ps);


      console.log(picked)
      //picked = picked >= data.length ? (picked % data.length) : picked;
      console.log("****")
      console.log(picked)
      if (oldpick.indexOf(picked) !== -1) {
        d3.select(this).call(spin);
        console.log(picked)
        return;
      } else {
        oldpick.push(picked);
        console.log("picked"+picked)
      }
      rotation += 90 - Math.round(ps / 2);
      vis.transition()
        .duration(3000)
        .attrTween("transform", rotTween)
        .each("end", function () {
          //mark question as seen
          d3.select(".slice:nth-child(" + (picked + 1) + ") path")
            .attr("fill", "#111");
          //populate question
        d3.select("#producttitle")
            .text(data[picked].productName)   ;
        d3.select("#productimg")    
            
            .attr("src",producttoget.productImage )
           
            .attr("height", 200)
            .attr("width", 200);

            d3.select("#coupondetail")
               .text("You Won a Coupon Promotion with Coupon Code "+coupon.codecoupon+" With Promotion Unit  "+coupon['promotion'].promotionunit+"%");
          oldrotation = rotation;

          container.on("click", spin);

        });

    }
    this.afficheresultat = false;

    //make arrow
    svg.append("g")
      .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h / 2) + padding.top) + ")")
      .append("path")
      .attr("d", "M-" + (r * .15) + ",0L0," + (r * .05) + "L0,-" + (r * .05) + "Z")
      .style({ "fill": "transparent" });
    //draw spin circle
    container.append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", 60)
      .style({ "fill": "white", "cursor": "pointer" });
    //spin text
    container.append("text")
      .attr("x", 0)
      .attr("y", 15)
      .attr("text-anchor", "middle")
      .text("SPIN")
      .style({ "font-weight": "bold", "font-size": "30px" });
      this.playAudio();


    function rotTween(to) {

      var i = d3.interpolate(oldrotation % 360, rotation);
      return function (t) {

        return "rotate(" + i(t) + ")";

      };

    }


    function getRandomNumbers() {
      var array = new Uint16Array(1000);
      var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);
      if (window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function") {
        window.crypto.getRandomValues(array);
        console.log("works");
      } else {
        //no support for crypto, get crappy random numbers
        for (var i = 0; i < 1000; i++) {
          array[i] = Math.floor(Math.random() * 100000) + 1;
        }
      }
      return array;
    }

  }
  //resfresh the page
  refresh(): void {
    window.location.reload();
  }
  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/audio/winner.mp3";
    audio.load();
    audio.play();
  }

}
