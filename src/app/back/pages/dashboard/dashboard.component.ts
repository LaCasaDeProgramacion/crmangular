import { Router } from '@angular/router';
import { ComplaintsService } from './../../../services/complaintsManagement/complaints.service';
import { DatePipe } from '@angular/common';
import { chartComplaint } from './../../variables/charts';
import { StatisticsComplaintService } from './../../../services/complaintsManagement/statistics-complaint.service';
import { complaintstatistics } from './../../../entities/complaintsmanagement/complaintstatistics';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { chartOptions, parseOptions, chartExample2, chartExample1 } from '../../variables/charts';

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
  public salesChart;
  public salesChart1;

  public clicked: boolean = true;
  public clicked1: boolean = false;
  width = 600;
  height = 400;
  type = "column2d";
  dataFormat = "json";
  date:Date;
  dataSource:complaintstatistics;
  nbcomplaint;
  constructor(private Sservice:StatisticsComplaintService,private complaintscervice:ComplaintsService,private router: Router){
    if (localStorage['Role']!= "ADMIN")
      {
        this.router.navigate(['home']);
      }
  }

  ngOnInit() {/*

    this.complaintscervice.get().subscribe(
      (Data) => {
        this.nbcomplaint=Data.length;
        console.log("tech"+Data);
      }
     )

    this.Sservice.getByDate('2019-12-05').subscribe(
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


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

*/
  }





  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }



}
