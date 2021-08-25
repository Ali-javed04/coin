import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  selectedvalue: number  = 1;
  selectedvalue1: number  = 2;
  selectedvalue2: number  = 1;
  selectedvalue3: number  = 1;
  images = [
    {
      src:'/assets/home.jpg',
      id:1
    },
    {
      src:'/assets/home.jpg',
      id:1
    },
    {
      src:'/assets/home.jpg',
      id:2
    },
    {
      src:'/assets/home.jpg',
      id:2
    },
    {
      src:'/assets/home.jpg',
      id:2
    },
    {
      src:'/assets/home.jpg',
      id:1
    },
    {
      src:'/assets/home.jpg',
      id:1
    },
    {
      src:'/assets/home.jpg',
      id:2
    },
    {
      src:'/assets/home.jpg',
      id:2
    },
    {
      src:'/assets/home.jpg',
      id:2
    },
    {
      src:'/assets/home.jpg',
      id:1
    },
    {
      src:'/assets/home.jpg',
      id:1
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  SelectedTab(value) {
    this.selectedvalue = value
  }
  SelectedTab1(value) {
    this.selectedvalue1 = value
  }
  SelectedTab2(value) {
    this.selectedvalue2 = value
  }
  SelectedTab3(value) {
    this.selectedvalue3 = value
  }

}
