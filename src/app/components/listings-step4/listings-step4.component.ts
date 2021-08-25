import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listings-step4',
  templateUrl: './listings-step4.component.html',
  styleUrls: ['./listings-step4.component.scss']
})
export class ListingsStep4Component implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  selectedValue: number  =1;
  Addresss= [
    {
      label:'Mailing Address 1',
      placeholder:'Mailing Address 1'
    },
    {
      label:'Mailing City',
      placeholder:'Mailing City'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  selectedTab(value) {
    this.selectedValue = value
  }
}
