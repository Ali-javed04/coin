import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.css']
})
export class Footer2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  year = (new Date()).getFullYear();

  socialLinks =
  [
    {
      icon:'fa-facebook-f',
      link:'#'
    },
    {
      icon:'fa-twitter',
      link:'#'
    },
    {
      icon:'fa-instagram',
      link:'#'
    },
    {
      icon:'fa-youtube',
      link:'#'
    }
  ]

}

