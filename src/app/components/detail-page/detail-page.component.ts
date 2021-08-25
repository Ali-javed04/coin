
import {Component, OnInit} from '@angular/core';
import {NgxGalleryOptions, NgxGalleryOrder} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  tags = [
    {
      name:'Disahwer'
    },
    {
      name:'Disahwer'
    },
    {
      name:'Disahwer'
    },
    {
      name:'Disahwer'
    },
    {
      name:'Disahwer'
    },
    {
      name:'Disahwer'
    },
    {
      name:'Disahwer'
    },
    {
      name:'Disahwer'
    },
    {
      name:'Disahwer condaitioner'
    },
    {
      name:'Disahwer condaitioner'
    },
    {
      name:'Disahwer condaitioner'
    },
    {
      name:'Disahwer condaitioner'
    },

  ]
  constructor() { }

  ngOnInit() {

    this.galleryOptions = [
      {
        width: '780px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        thumbnailsOrder:NgxGalleryOrder.Row
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: '/assets/home.jpg',
        medium: '/assets/home.jpg',
        big: '/assets/home.jpg'
      },
      {
        small: '/assets/home.jpg',
        medium: '/assets/home.jpg',
        big: '/assets/home.jpg'
      },
      {
        small: '/assets/home.jpg',
        medium: '/assets/home.jpg',
        big: '/assets/home.jpg'
      },{
        small: '/assets/home.jpg',
        medium: '/assets/home.jpg',
        big: '/assets/home.jpg'
      },
      {
        small: '/assets/home.jpg',
        medium: '/assets/home.jpg',
        big: '/assets/home.jpg'
      }
    ];
  }
}



