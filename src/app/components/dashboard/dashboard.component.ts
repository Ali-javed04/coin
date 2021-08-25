import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexMarkers,
  ApexXAxis,
  ApexPlotOptions
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  labels: string[];
  stroke: any; // ApexStroke;
  markers: ApexMarkers;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  tooltip: ApexTooltip;
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
       list1= [
         {
           price:'34,152',
           key:'Total Balances',
           percantage:'2.67%',
           time:'since last week'

         },
         {
          price:'34,152',
          key:'Total Balances',
          percantage:'2.67%',
          time:'since last week'

        },
       ]
       list2= [
        {
          price:'34,152',
          key:'Total Balances',
          percantage:'2.67%',
          time:'since last week'

        },
        {
         price:'34,152',
         key:'Total Balances',
         percantage:'2.67%',
         time:'since last week'

       },
      ]
      list3 = [
        {
          name:'NiDollor',
          color:'yellow',
          className:'',
          width2:80
        },
        {
          name:'Bitcoin',
          color:'yellow',
          className:'progress-bar-success',
          width2:90
        },
        {
          name:'Nicoin',
          color:'yellow',
          className:'progress-bar-warning',
          width2:80
        },
        {
          name:'NiEuro',
          color:'yellow',
          className:'progress-bar-pink',
          width2:99
        },
        {
          name:'NiPound',
          color:'yellow',
          className:'',
          width2:70
        },

      ]

      list4 = [
        {
          firstHeading:'Invoice Activity',
          SecondHeading:'Date',
          ThiredHeading:'Recent',
          span:2,
          tableContents:[
            {
               img:'/assets/profile3.jpg',
               firstName:'Robert',
               lastName:'California',
               date:'01/01/2021',
               amount:'$420.00'
            },
            {
              img:'/assets/profile3.jpg',
              firstName:'Robert',
              lastName:'California',
              date:'01/01/2021',
              amount:'$420.00'
           },
           {
            img:'/assets/profile3.jpg',
            firstName:'Robert',
            lastName:'California',
            date:'01/01/2021',
            amount:'$420.00'
         },
         {
          img:'/assets/profile3.jpg',
          firstName:'Robert',
          lastName:'California',
          date:'01/01/2021',
          amount:'$420.00'
       },
          ]
        },
        {
          firstHeading:'Transfers',
          SecondHeading:'Date',
          ThiredHeading:'Recent',
          span:2,
          tableContents:[
            {
               img:'/assets/profile3.jpg',
               firstName:'Robert',
               lastName:'California',
               date:'01/01/2021',
               amount:'$420.00'
            },
            {
              img:'/assets/profile3.jpg',
              firstName:'Robert',
              lastName:'California',
              date:'01/01/2021',
              amount:'$420.00'
           },
           {
            img:'/assets/profile3.jpg',
            firstName:'Robert',
            lastName:'California',
            date:'01/01/2021',
            amount:'$420.00'
         },
         {
          img:'/assets/profile3.jpg',
          firstName:'Robert',
          lastName:'California',
          date:'01/01/2021',
          amount:'$420.00'
       },
          ]
        },
        {
          firstHeading:'Balances',
          SecondHeading:'Date',
          ThiredHeading:'USD ',
          span:3,
          tableContents:[
            {
               img:'/assets/Rectangle.svg',
               firstName:'Robert',
               lastName:'California',
               date:'Total 100',
               amount:'$420.00'
            },
            {
              img:'/assets/Rectangle.svg',
              firstName:'Robert',
              lastName:'California',
              date:'Total 100',
              amount:'$420.00'
           },
           {
            img:'/assets/Rectangle.svg',
            firstName:'Robert',
            lastName:'California',
            date:'Total 100',
            amount:'$420.00'
         },
         {
          img:'/assets/Rectangle.svg',
          firstName:'Robert',
          lastName:'California',
          date:'Total 100',
          amount:'$420.00'
       },
          ]
        }
      ]

      list5  =  [
        {
          invoice:'1001',
          billing:'Neal',
          date:'07 Oct',
          total:'$400',
          payment:'Paid',
          payment2:'MasterCard'
        },
        {
          invoice:'1001',
          billing:'Neal',
          date:'07 Oct',
          total:'$400',
          payment:'Paid',
          payment2:'MasterCard'
        },
        {
          invoice:'1001',
          billing:'Neal',
          date:'07 Oct',
          total:'$400',
          payment:'Paid',
          payment2:'MasterCard'
        },
        {
          invoice:'1001',
          billing:'Neal',
          date:'07 Oct',
          total:'$400',
          payment:'Paid',
          payment2:'MasterCard'
        },
        {
          invoice:'1001',
          billing:'Neal',
          date:'07 Oct',
          total:'$400',
          payment:'Paid',
          payment2:'MasterCard'
        },
        {
          invoice:'1001',
          billing:'Neal',
          date:'07 Oct',
          total:'$400',
          payment:'Paid',
          payment2:'MasterCard'
        },
      ]
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Destops",
          type: "column",
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
        },
        {
          name: "Laptops",
          type: "area",
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        },
        {
          name: "Tablets",
          type: "line",
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        stacked: false
      },
      stroke: {
        width: [0, 2, 5],
        curve: "smooth"
      },
      plotOptions: {
        bar: {
          columnWidth: "50%"
        }
      },

      fill: {
        colors:['#214497', '#C5D4CD', 'yellow'],

        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
        }
      },
      labels: [
        "01/01/2003",
        "02/01/2003",
        "03/01/2003",
        "04/01/2003",
        "05/01/2003",
        "06/01/2003",
        "07/01/2003",
        "08/01/2003",
        "09/01/2003",
        "10/01/2003",
        "11/01/2003"
      ],
      markers: {
        size: 0
      },
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        title: {
          text: "Quantity"
        },
        min: 0
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function(y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;
          }
        }
      }
    };
  }

  ngOnInit(): void {
  }
  public generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = "w" + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }

}
