import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  constructor(private router: Router) { }
  currenturl: string = '';
  ngOnInit(): void {

    this.router.events.pipe(
      filter((event:any) => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
   if(event.url =='/') {
        this.currenturl = 'home'
      }else if(event.url == '/mapSearch') {
        this.currenturl = 'common'
      }else if(event.url == '/search') {
        this.currenturl = 'common'
      }else if(event.url == '/detail') {
        this.currenturl = 'common'
      }else if(event.url == '/videoDetails') {
        this.currenturl = 'common'
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
