import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { SearchAllComponent } from './components/search-all/search-all.component';
import { SearchAllWithoutMapComponent } from './components/search-all-without-map/search-all-without-map.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { HeaderComponent } from './components/header/header.component';
import { AgmCoreModule } from '@agm/core';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { VideoDetailPageComponent } from './components/video-detail-page/video-detail-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MyListingComponent } from './components/my-listing/my-listing.component';
import { ListingsStep1Component } from './components/listings-step1/listings-step1.component';
import { ListingsStep2Component } from './components/listings-step2/listings-step2.component';
import { ListingsStep3Component } from './components/listings-step3/listings-step3.component';
import { ListingsStep4Component } from './components/listings-step4/listings-step4.component';
import { ListingsStep5Component } from './components/listings-step5/listings-step5.component';
import { ListingsStep6Component } from './components/listings-step6/listings-step6.component';
import { ImageDragDirective } from './image-drag.directive';
import { ListingsReportComponent } from './components/listings-report/listings-report.component';
import { DashboardNavbarComponent } from './components/dashboard-navbar/dashboard-navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarMobComponent } from './components/sidebar-mob/sidebar-mob.component';
import { Footer2Component } from './components/footer2/footer2.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,

    DashboardComponent,
     SearchAllComponent,
     SearchAllWithoutMapComponent,
     DetailPageComponent,
     HeaderComponent,
     VideoDetailPageComponent,
     SearchBarComponent,
     GalleryComponent,
     MyListingComponent,
     ListingsStep1Component,
     ListingsStep2Component,
     ListingsStep3Component,
     ListingsStep4Component,
     ListingsStep5Component,
     ListingsStep6Component,
     ImageDragDirective,
     ListingsReportComponent,
     DashboardNavbarComponent,
     SidebarComponent,
     SidebarMobComponent,
     Footer2Component,
     CompanyProfileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB1CaF3uz9Mv27pssBj4l-j5jc_-AQLrdU'
    }),
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
