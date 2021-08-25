import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ListingsReportComponent } from './components/listings-report/listings-report.component';
import { ListingsStep1Component } from './components/listings-step1/listings-step1.component';
import { ListingsStep2Component } from './components/listings-step2/listings-step2.component';
import { ListingsStep3Component } from './components/listings-step3/listings-step3.component';
import { ListingsStep4Component } from './components/listings-step4/listings-step4.component';
import { ListingsStep5Component } from './components/listings-step5/listings-step5.component';
import { ListingsStep6Component } from './components/listings-step6/listings-step6.component';
import { MyListingComponent } from './components/my-listing/my-listing.component';
import { SearchAllWithoutMapComponent } from './components/search-all-without-map/search-all-without-map.component';
import { SearchAllComponent } from './components/search-all/search-all.component';
import { VideoDetailPageComponent } from './components/video-detail-page/video-detail-page.component';

const routes: Routes = [
  {
    path:'',component:DashboardComponent
  },
  {
    path:'mapSearch',component:SearchAllComponent
  },
  {
    path:'search',component:SearchAllWithoutMapComponent
  },
  {
    path:'detail',component:DetailPageComponent
  },
  {
    path:'gallery',component:GalleryComponent
  },
  {
    path:'listing',component:MyListingComponent
  },
  {
    path:'listingStep1',component:ListingsStep1Component
  },
  {
    path:'videoDetails',component:VideoDetailPageComponent
  },
  {
    path:'listingStep2',component:ListingsStep2Component
  },
  {
    path:'listingStep3',component:ListingsStep3Component
  },
  {
    path:'listingStep4',component:ListingsStep4Component
  },
  {
    path:'listingStep5',component:ListingsStep5Component
  },
  {
    path:'listingStep6',component:ListingsStep6Component
  },
  {
    path:'listingReport',component:ListingsReportComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
