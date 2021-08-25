import { AfterContentInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, DoCheck{
   openn : string = "";
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
    }
  ]
}
