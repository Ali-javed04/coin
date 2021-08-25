import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-listing',
  templateUrl: './my-listing.component.html',
  styleUrls: ['./my-listing.component.scss']
})
export class MyListingComponent implements OnInit {

  buttonList= [
    {
      name:'PROPERTIES',
      dis:'Resindental,Commerical,Short term,'
    },
    {
      name:'VEHICLES',
      dis:'Resindental,Commerical,Short term,'
    },
    {
      name:'BOATS',
      dis:'Resindental,Commerical,Short term,'
    },
    {
      name:'AIRLANES',
      dis:'Resindental,Commerical,Short term,'
    },
    {
      name:'PRODUCTS',
      dis:'Resindental,Commerical,Short term, payable and master card that use for work'
    },
    {
      name:'SERVICES',
      dis:'Resindental,Commerical,Short term, payable and master card that use for work'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
