import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listings-step3',
  templateUrl: './listings-step3.component.html',
  styleUrls: ['./listings-step3.component.scss']
})
export class ListingsStep3Component implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  selectedValue: number  =1;

  constructor() { }

  ngOnInit(): void {
  }
  selectedTab(value) {
    this.selectedValue = value
  }
}
