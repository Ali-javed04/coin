import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.css']
})
export class DashboardNavbarComponent implements OnInit {
  notifications = 2;
  constructor(private router: Router) { }
  currenturl: string = '';
  ngOnInit(): void {

    this.router.events.pipe(
      filter((event:any) => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
   if(event.url =='/') {
        this.currenturl = 'home'
      }else if(event.url == '/detail') {
        this.currenturl = 'common'
      }else if(event.url == '/gallery') {
        this.currenturl = 'common'
      }else if(event.url == '/videoDetails ') {
        this.currenturl = 'common'
      }else if(event.url == '/listingStep1') {
        this.currenturl = 'common'
      }else if(event.url == '/listingStep2') {
        this.currenturl = 'common'
      }else if(event.url == '/listingStep3') {
        this.currenturl = 'common'
      }else if(event.url == '/listingStep4') {
        this.currenturl = 'common'
      }else if(event.url == '/listingStep5') {
        this.currenturl = 'common'
      }else if(event.url == '/listingStep6') {
        this.currenturl = 'common'
      }else if(event.url == '/listingReport') {
        this.currenturl = 'common'
      }
      else if(event.url == '/listing') {
        this.currenturl = 'common'
      }
      else if(event.url == '/search') {
        this.currenturl = 'specific'
      }
      else if(event.url == '/mapSearch') {
        this.currenturl = 'specific'
      }
      else {
        this.currenturl = event.url
      }
    });
  }
   currentState(url:string) : boolean {
    return this.currenturl.includes(url)
   }

}
