import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-mob',
  templateUrl: './sidebar-mob.component.html',
  styleUrls: ['./sidebar-mob.component.css']
})
export class SidebarMobComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit(): void {
  }
  links =
  [
   
    {
      text:'Dashboard',
      link:'/personal',
    },
    {
      text:'Messages',
      link:'/business',
    },
    {
      text:'Contacts',
      link:'/contacts',
    },
    {
      text:'Balances',
      link:'/company',
    },
    {
      text:'Products',
      link:'/product',
    },
    {
      text:'Invoices',
      link:'/Invoices',
    },
    {
      text:'Dontaions',
      link:'/crowdfunding',
    },
    {
      text:'Pay Request',
      link:'/feeds',
    },
    { 
      text:'Pay Recieved',
      link:'/profile',
    },
    {
      text:'Settings',
      link:'/settings/company-profile',
    },
    {
      text:'Support',
      link:'/support',
    }
  ]
}
