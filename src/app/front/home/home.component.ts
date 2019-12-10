import { ApiService } from 'src/app/services/products/api.service';
import { EventService } from './../../services/prospectingManagement/event.service';
import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/entities/product';
import * as d3 from 'd3';
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
   // this.loadEvents();
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
   // this.TopViewedProducts();
   // this.slides = this.chunk(this.productList, 3);
  }


 /* slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }  */
  TopViewedProducts(){
    this.productService.getTopViewedProducts().subscribe(
      (Data) => {
        this.productList = Data ;
        console.log(Data);


      })

  }

//d3


ngAfterContentInit(){

  /* var arrayjson = ({
     "name": "marvel",
     "img": "http://marvel-force-chart.surge.sh/marvel_force_chart_img/marvel.png",
     "children": [
      {
       "name": "Heroes",
       "children": [
        {
          "hero": "Spider-Man",
          "name": "Peter Benjamin Parker",
          "link": "http://marvel.com/characters/54/spider-man",
          "img":  "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_spiderman.png",
          "size": 40000
        },
        {
          "hero": "CAPTAIN MARVEL",
          "name": "Carol Danvers",
          "link": "http://marvel.com/characters/9/captain_marvel",
          "img":  "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_captainmarvel.png",
          "size": 40000
        },
      */


       // some colour variables
       var tcBlack = "#130C0E";

       // rest of vars
       var w = 1500,
           h = 806,
           maxNodeSize = 50,
           x_browser = 20,
           y_browser = 25,
           root;

       var vis;
       var force = d3.layout.force();

       vis = d3.select("#vis").append("svg").attr("width", w).attr("height", h);


       d3.json("https://api.myjson.com/bins/8x17k",function(json) {
         console.log(json)
        // if(err) console.log("error fetching data");
         // data holds the file content
         root = json;
         root.fixed = true;
         root.x = w / 2;
         root.y = h / 4;


               // Build the path
         var defs = vis.insert("svg:defs")
             .data(["end"]);


         defs.enter().append("svg:path")
             .attr("d", "M0,-5L10,0L0,5");

            update();
       });


       /**
        *
        */
       function update() {
         var nodes = flatten(root),
             links = d3.layout.tree().links(nodes);

         // Restart the force layout.
         force.nodes(nodes)
               .links(links)
               .gravity(0.05)
           .charge(-1500)
           .linkDistance(100)
           .friction(0.5)
           .linkStrength(function(l, i) {return 1; })
           .size([w, h])
           .on("tick", tick)
               .start();

          var path = vis.selectAll("path.link")
             .data(links, function(d) { return d.target.id; });

           path.enter().insert("svg:path")
             .attr("class", "link")
             // .attr("marker-end", "url(#end)")
             .style("stroke", "#eee");


         // Exit any old paths.
         path.exit().remove();



         // Update the nodes…
         var node = vis.selectAll("g.node")
             .data(nodes, function(d) { return d.id; });


         // Enter any new nodes.
         var nodeEnter = node.enter().append("svg:g")
             .attr("class", "node")
             .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
             .on("click", click)
             .call(force.drag);

         // Append a circle
         nodeEnter.append("svg:circle")
             .attr("r", function(d) { return Math.sqrt(d.size) / 10 || 4.5; })
             .style("fill", "#FB633E");


         // Append images
         var images = nodeEnter.append("svg:image")
               .attr("xlink:href",  function(d) { return d.img;})
               .attr("x", function(d) { return -25;})
               .attr("y", function(d) { return -25;})
               .attr("height", 100)
               .attr("width", 100);

         // make the image grow a little on mouse over and add the text details on click
         var setEvents = images
                 // Append hero text
                 .on( 'click', function (d) {
                     d3.select("h1").html(d.hero);
                     d3.select("#identityd3").html(d.name);
                     d3.select("#linker").html ("Take me to " + "<a href='" + d.link + "' >"  + d.hero + " web page ⇢"+ "</a>" );
                  })

                 .on( 'mouseenter', function() {
                   // select element in current context
                   d3.select( this )
                     .transition()
                     .attr("x", function(d) { return -60;})
                     .attr("y", function(d) { return -60;})
                     .attr("height", 150)
                     .attr("width", 150);
                 })
                 // set back
                 .on( 'mouseleave', function() {
                   d3.select( this )
                     .transition()
                     .attr("x", function(d) { return -25;})
                     .attr("y", function(d) { return -25;})
                     .attr("height", 100)
                     .attr("width", 100);
                 });

         // Append hero name on roll over next to the node as well
         nodeEnter.append("text")
             .attr("class", "nodetext")
             .attr("x", x_browser)
             .attr("y", y_browser +15)
             .attr("fill", tcBlack)
             .text(function(d) { return d.hero; });


         // Exit any old nodes.
         node.exit().remove();


         // Re-select for update.
         path = vis.selectAll("path.link");
         node = vis.selectAll("g.node");

       function tick() {


           path.attr("d", function(d) {

            var dx = d.target.x - d.source.x,
                  dy = d.target.y - d.source.y,
                  dr = Math.sqrt(dx * dx + dy * dy);
                  return   "M" + d.source.x + ","
                   + d.source.y
                   + "A" + dr + ","
                   + dr + " 0 0,1 "
                   + d.target.x + ","
                   + d.target.y;
         });
           node.attr("transform", nodeTransform);
         }
       }


       /**
        * Gives the coordinates of the border for keeping the nodes inside a frame
        * http://bl.ocks.org/mbostock/1129492
        */
       function nodeTransform(d) {
         d.x =  Math.max(maxNodeSize, Math.min(w - (d.imgwidth/2 || 16), d.x));
           d.y =  Math.max(maxNodeSize, Math.min(h - (d.imgheight/2 || 16), d.y));
           return "translate(" + d.x + "," + d.y + ")";
          }

       /**
        * Toggle children on click.
        */
       function click(d) {
         if (d.children) {
           d._children = d.children;
           d.children = null;
         } else {
           d.children = d._children;
           d._children = null;
         }

         update();
       }


       /**
        * Returns a list of all nodes under the root.
        */
       function flatten(root) {
         var nodes = [];
         var i = 0;

         function recurse(node) {
           if (node.children)
             node.children.forEach(recurse);
           if (!node.id)
             node.id = ++i;
           nodes.push(node);
         }

         recurse(root);
         return nodes;
       }

   }

}
