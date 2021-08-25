import { AfterContentInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, DoCheck{
   openn : string = "";
   currenturl: string = '';
  constructor(public router: Router) {
    // if(document.getElementById("inner")!.style !=  null)
    //  {
    //   document.getElementById("inner")!.style.marginLeft  = "-1px";
    //   document.getElementById("main-div")!.style.marginLeft  = "60px";
    //   document.getElementById("footer")!.style.marginLeft  = "-1px";
    //   document.getElementById("nav")!.style.marginLeft  = "60px";
    //   document.getElementById("icons1")!.style.opacity  = "0";
    //   document.getElementById("icons1")!.style.display  = "none";
    //  }

   }


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
      else if(event.url == '/search') {
        this.currenturl = 'common'
      }
      else if(event.url == '/mapSearch') {
        this.currenturl = 'common'
      }
      else if(event.url == '/listing') {
        this.currenturl = 'common'
      }
      else {
        this.currenturl = event.url
      }
    });

    if(document.getElementById("inner"))
    {
      document.getElementById("inner")!.style.marginLeft  = "-1px";
    }

    if(document.getElementById("main-div"))
    {
      if(window.screen.width < 576)
      {
        document.getElementById("main-div")!.style.marginLeft  = "0px";
      }
      else
      {
        document.getElementById("main-div")!.style.marginLeft  = "60px";
      }
    }

    if(document.getElementById("footer"))
    {
      document.getElementById("footer")!.style.marginLeft  = "-1px";
    }

    if(document.getElementById("nav"))
    {
      if(window.screen.width < 576)
      {
        document.getElementById("nav")!.style.marginLeft  = "0px";
      }
      else
      {
        document.getElementById("nav")!.style.marginLeft  = "60px";
      }
    }

    if(document.getElementById("icons1"))
    {
      document.getElementById("icons1")!.style.opacity  = "0";
      document.getElementById("icons1")!.style.display  = "none";
    }

  }
    ngDoCheck()
    {
      if(this.openn != 'a')
       {
        if(document.getElementById("inner"))
        {
          document.getElementById("inner")!.style.marginLeft  = "-1px";
        }

        if(document.getElementById("main-div"))
        {
          if(window.screen.width < 576)
          {
            document.getElementById("main-div")!.style.marginLeft  = "0px";
          }
          else
          {
            document.getElementById("main-div")!.style.marginLeft  = "60px";
          }
        }

        if(document.getElementById("footer"))
        {
          document.getElementById("footer")!.style.marginLeft  = "-1px";
        }

        if(document.getElementById("nav"))
        {
          if(window.screen.width < 576)
          {
            document.getElementById("nav")!.style.marginLeft  = "0px";
          }
          else
          {
            document.getElementById("nav")!.style.marginLeft  = "60px";
          }
        }

        if(document.getElementById("icons1"))
        {
          document.getElementById("icons1")!.style.opacity  = "0";
          document.getElementById("icons1")!.style.display  = "none";
        }
       }

    }
  open(a)
  {
    this.openn = a;
    if(document.getElementById("logo"))
    {
      document.getElementById("logo")!.style.opacity  = "0";
    }

    if(document.getElementById("sidebar"))
    {
      document.getElementById("sidebar")!.style.width  = "250px";
    }

    if(document.getElementById("nav"))
    {
      document.getElementById("nav")!.style.marginLeft  = "250px";
    }

    if(document.getElementById("footer"))
    {
      document.getElementById("footer")!.style.marginLeft  = "-1px";
    }

    if(document.getElementById("main-div"))
    {
      document.getElementById("main-div")!.style.marginLeft  = "250px";
    }

    if(document.getElementById("icons"))
    {
      document.getElementById("icons")!.style.opacity  = "0";
      document.getElementById("icons")!.style.display  = "none";
    }

    if(document.getElementById("icons1"))
    {
      document.getElementById("icons1")!.style.display  = "block";
      setTimeout(() => document.getElementById("icons1")!.style.opacity = "1", 300);
    }

  }


  close()
  {

    if(document.getElementById("logo"))
    {
      document.getElementById("logo")!.style.opacity  = "1";
    }

    if(document.getElementById("sidebar"))
    {
      document.getElementById("sidebar")!.style.width  = "60px";
    }

    if(document.getElementById("nav"))
    {
      document.getElementById("nav")!.style.marginLeft  = "60px";
    }

    if(document.getElementById("footer"))
    {
      document.getElementById("footer")!.style.marginLeft  = "-1px";
    }

    if(document.getElementById("main-div"))
    {
      document.getElementById("main-div")!.style.marginLeft  = "60px";
    }

    if(document.getElementById("icons"))
    {
      document.getElementById("icons")!.style.display  = "block";
      setTimeout(() => document.getElementById("icons")!.style.opacity = "1", 300);
    }

    if(document.getElementById("icons1"))
    {
      document.getElementById("icons1")!.style.opacity  = "0";
      document.getElementById("icons1")!.style.display  = "none";
    }

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
    },
    {
      text:'Home',
      link:'/home',
    },
    {
      text:'Saved',
      link:'/home',
    },
    {
      text:'Search',
      link:'/home',
    }
  ]


  currentState(url:string) : boolean {
    return this.currenturl.includes(url)
   }
}
