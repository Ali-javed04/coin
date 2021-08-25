import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listings-step5',
  templateUrl: './listings-step5.component.html',
  styleUrls: ['./listings-step5.component.scss']
})
export class ListingsStep5Component implements OnInit {

  listofCheckboxes = [
    {
      label:'Fully Equiped  Kitchen',
      value:true
    },
    {
      label:'Fully Furnished',
      value:true
    },
    {
      label:'Partial Furnished',
      value:true
    },

  ]
  listofExtras=
  [
    {
      label:'Dishwasher',
      value:true
    },
    {
      label:'Microwave',
      value:true
    },
    {
      label:'Unit Washer',
      value:true
    },
    {
      label:'Unit Dryer',
      value:true
    },
    {
      label:'Disposal',
      value:true
    },
    {
      label:'Garage',
      value:true
    },
    {
      label:'Air Conditioner',
      value:true
    },
    {
      label:'Heater',
      value:true
    },
    {
      label:'In Fireplace',
      value:true
    },
    {
      label:'Pool/Hot Tub',
      value:true
    },
    {
      label:'Balcony',
      value:true
    },
    {
      label:'Garage',
      value:true
    },
    {
      label:'Coffee Maker',
      value:true
    },
    {
      label:'Bath Tub',
      value:true
    },
    {
      label:'Work Space',
      value:true
    },
    {
      label:'Patio',
      value:true
    },
    {
      label:'Wifi',
      value:true
    },
    {
      label:'TV',
      value:true
    },
    {
      label:'BBQ Grill',
      value:true
    },
    {
      label:'Excersice Eq.',
      value:true
    },
    {
      label:'Walk in Closet',
      value:true
    },
  ]
  listofProperties=[
    {
      label:'Water Front',
      value:true
    },
    {
      label:'Mountain ',
      value:true
    },
    {
      label:'Beach view',
      value:true
    },
    {
      label:'Park near',
      value:true
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
