import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listings-report',
  templateUrl: './listings-report.component.html',
  styleUrls: ['./listings-report.component.scss']
})
export class ListingsReportComponent implements OnInit {

  list=[
    {
      value:true,
      item:'Ni 12345678',
      status:'Active',
      category:'Propertie',
      price:'$230,000.00'
    },
    {
      value:true,
      item:'Ni 12345678',
      status:'Active',
      category:'Propertie',
      price:'$230,000.00'
    },
    {
      value:true,
      item:'Ni 12345678',
      status:'Active',
      category:'Propertie',
      price:'$230,000.00'
    },
    {
      value:true,
      item:'Ni 12345678',
      status:'Active',
      category:'Propertie',
      price:'$230,000.00'
    },
    {
      value:true,
      item:'Ni 12345678',
      status:'Active',
      category:'Propertie',
      price:'$230,000.00'
    },
    {
      value:true,
      item:'Ni 12345678',
      status:'Active',
      category:'Propertie',
      price:'$230,000.00'
    },
    {
      value:true,
      item:'Ni 12345678',
      status:'Active',
      category:'Propertie',
      price:'$230,000.00'
    },
    {
      value:true,
      item:'Ni 12345678',
      status:'Active',
      category:'Propertie',
      price:'$230,000.00'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
