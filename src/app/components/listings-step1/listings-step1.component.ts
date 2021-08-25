import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listings-step1',
  templateUrl: './listings-step1.component.html',
  styleUrls: ['./listings-step1.component.scss']
})
export class ListingsStep1Component implements OnInit {
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
      name:'Residental'
    },
    {
      name:'Commerical'
    },
    {
      name:'Vacational'
    }
  ]
  SelectTabs = [
    {
      label:'Condition',
      options:[
        {
          name:'New',
          value:1
        },
        {
          name:'old',
          value:2
        },
      ]
    },
    {
      label:'Year Built',
      options:[
        {
          name:'1983',
          value:1
        },
        {
          name:'1984',
          value:2
        },
      ]
    },
    {
      label:'Monthly Rental',
      options:[
        {
          name:'New',
          value:1
        },
        {
          name:'old',
          value:2
        },
      ]
    },
    {
      label:'Minimum Contract Team',
      options:[
        {
          name:'01 year',
          value:1
        },
        {
          name:'02 year',
          value:2
        },
      ]
    },
  ]
  selectedValue: number =0
  selectedValue1: number=0

  listofCheckboxes = [
    {
      label:'Utilites Included',
      value:true
    },
    {
      label:'Income Restricted',
      value:true
    },
    {
      label:'Short Terms',
      value:true
    },
    {
      label:'Garage',
      value:true
    },
    {
      label:'Balcony',
      value:true
    },
    {
      label:'Pet Friendly',
      value:true
    },
  ]
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
