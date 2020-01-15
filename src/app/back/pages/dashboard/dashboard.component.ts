import { FilteringEventArgs } from '@syncfusion/ej2-dropdowns';
import { EmitType } from '@syncfusion/ej2-base';
import { chartproduct } from './../../variables/charts';
import { ApiService } from 'src/app/services/products/api.service';


import { chartComplaint, chartwaeltest, chartwaelll } from './../../variables/charts';
import { Router } from '@angular/router';
import { ComplaintsService } from './../../../services/complaintsManagement/complaints.service';
import { DatePipe } from '@angular/common';

import { StatisticsComplaintService } from './../../../services/complaintsManagement/statistics-complaint.service';
import { complaintstatistics } from './../../../entities/complaintsmanagement/complaintstatistics';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { chartOptions, parseOptions, chartExample2, chartExample1 } from '../../variables/charts';
import { Query } from '@syncfusion/ej2-data';
import { ChangeEventArgs } from '@syncfusion/ej2-buttons';

const data = {
  chart: {
    caption: "Countries With Most Oil Reserves [2017-18]",
    subcaption: "In MMbbl = One Million barrels",
    xaxisname: "Country",
    yaxisname: "Reserves (MMbbl)",
    numbersuffix: "K",
    theme: "fusion"
  }
};



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {



  
 
 
  public datasets: any;
  public data:complaintstatistics;
  public data1;
  public salesChart;
  public salesChart1;
  public packchart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;
  public clicked3: boolean = false;
  width = 600;
  height = 400;
  type = "column2d";
  dataFormat = "json";
  date:Date;
  dataSource:complaintstatistics;
  nbcomplaint;
  public dateList: string[] = ['2019-01-31', '2019-02-28', '2019-03-31', '2019-04-30', '2019-05-31', '2019-06-30','2019-07-31','2019-08-31','2019-09-30','2019-10-31','2019-11-30','2019-12-31'];
  value;

  constructor(private Sservice:StatisticsComplaintService,private complaintscervice:ComplaintsService,private router: Router, private productService:ApiService){
    if (localStorage['Role']!= "ADMIN")
      {
        this.router.navigate(['home']);
      }
  }
  public onFiltering: EmitType<any> =  (e: FilteringEventArgs) => {
    let query = new Query();
    //frame the query based on search string with filter type.
    query = (e.text != "") ? query.where("serviceName", "startswith", e.text, true) : query;
    //pass the filter data source, filter query to updateData method.
    e.updateData(this.dateList, query);
  };
  ngOnInit() {
    this.value='2019-01-31';
    this.complaintscervice.get().subscribe(
      (Data) => {
        this.nbcomplaint=Data.length;
        console.log("tech"+Data);
      }
     )

      
    this.Sservice.getByDate(this.value).subscribe(
      (d) =>
      {
        console.log(d['0']['nbClosedComplaint']);
        var chartSales = document.getElementById('chart-sales');
        var chartSales1 = document.getElementById('chart-sales1');

    this.salesChart = new Chart(chartSales, {
			type: 'bar',
      options: chartComplaint.options,

      data:
      {
        labels : ['Opened', 'Treated', 'In-progress', 'Closed'],
        datasets: [
          {
            label: "Statistics",
            data :[d['0']["nbOpenedComplaint"], d['0']["nbTreatedComplaint"], d['0']["nbinprogressComplaint"], d['0']["nbClosedComplaint"]]
            // data :[40,50, 60, 70]

          }
        ]

    }
  }
    );

    
    this.salesChart1 = new Chart(chartSales1, {
			type: 'bar',
      options: chartComplaint.options,

      data:
      {
        labels : ['Technical', 'Financial', 'Relational'],
        datasets: [
          {
            label: "Statistics",
            data :[d['0']["nbTechnicalComplaint"], d['0']["nbfinancialComplaint"], d['0']["nbrelationalComplaint"]]
            // data :[40,50, 60, 70]

          }
        ]

    }
  }
    );
        console.log(this.dataSource);
        console.log(d);

      }
    );


    // this.datasets = [
    //   [0, 20, 10, 30, 15, 40, 20, 60, 60],
    //   [0, 20, 5, 25, 10, 30, 15, 40, 40]
    // ];
    // this.data = this.datasets[0];

    this.productService.getProducts().subscribe(
      (d) =>
      {
        let labels:any=[];
        let nbvue:any=[];
        console.log(d)
        console.log(d['0']['productName'])
        var chartSales = document.getElementById('chart-sales7');
        for(let i in d )
          {
            labels.push(d[i]['productName']);
            nbvue.push(d[i]['numberOfViews']);
          }
          console.log(labels)
          console.log(nbvue)


        //var chartSales1 = document.getElementById('chart-sales1');
    this.salesChart = new Chart(chartSales, {
			type: 'bar',
      options: chartproduct.options,

      data:
      {

          labels : labels,
          datasets: [
            {
              label: "Statistics",
              data :nbvue
              // data :[40,50, 60, 70]

            }
          ]
        }


      });

  });





    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    this.datasets = [
     [0, 2, 2, 2, 2, 2],
      [0, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1],
    ];
    this.data1 = this.datasets[0];
    var packchartt = document.getElementById('chart-sales3');



    this.packchart = new Chart(packchartt, {
      type: 'bar',
      options: chartwaelll.options,
      data: chartwaelll.data
    });
  }





  public updateOptions() {
    this.packchart.data.datasets[0].data = this.data1;
    this.packchart.update();
  }

  public onChange: EmitType<any> = (e: ChangeEventArgs) => {
    console.log(this.value)
    this.Sservice.getByDate(this.value).subscribe(
      (d) =>
      {
        console.log(d['0']['nbClosedComplaint']);
        //var chartSales = document.getElementById('chart-sales');
        //var chartSales1 = document.getElementById('chart-sales1');



   
    
        this.salesChart.data.datasets[0].data = [d['0']["nbOpenedComplaint"], d['0']["nbTreatedComplaint"], d['0']["nbinprogressComplaint"], d['0']["nbClosedComplaint"]];
        this.salesChart1.data.datasets[0].data = [d['0']["nbTechnicalComplaint"], d['0']["nbfinancialComplaint"], d['0']["nbrelationalComplaint"]];

        this.salesChart.update();
        this.salesChart1.update();
        console.log(d);

      }
    );
  };


  

}