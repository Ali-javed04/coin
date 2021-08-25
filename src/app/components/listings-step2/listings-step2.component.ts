import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listings-step2',
  templateUrl: './listings-step2.component.html',
  styleUrls: ['./listings-step2.component.scss']
})
export class ListingsStep2Component implements OnInit {
  categories= [
    {
      name:'Rental'
    },
    {
      name:'Sale'
    }
  ]
  properties = [
    {
      name:'House'
    },
    {
      name:'Townhome'
    },
    {
      name:'MultiFamily'
    },
    {
      name:'Condo'
    },
    {
      name:'Mobile Home'
    },
    {
      name:'Land'
    },
  ]
  SelectTabs = [
    {
      label:'Bedroom',
      options:[
        {
          name:'04',
          value:1
        },
        {
          name:'03',
          value:2
        },
      ]
    },
    {
      label:'Bathrooms',
      options:[
        {
          name:'01',
          value:1
        },
        {
          name:'02',
          value:2
        },
      ]
    },

  ]
  selectedinput = [
    {
      label:'Home Square feets',
      values:'500'
    },
    {
      label:'Lot Square feets',
      values:'01'
    },
    {
      label:'Parkings',
      values:'02'
    },
    {
      label:'Storage',
      values:'square feets'
    },
  ]
  selectedValue: number =0
  selectedValue1: number=0


  constructor() { }

  ngOnInit(): void {
  }
  selectedTab(value) {
    this.selectedValue = value

  }
  selectedTab1(value) {
    this.selectedValue1 = value
  }
}

