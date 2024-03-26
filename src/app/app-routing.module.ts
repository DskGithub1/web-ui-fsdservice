import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonConstants } from './shared/constants/comman-constants';

const routes: Routes = [
  {
    path: CommonConstants.Routes.Login,
    loadChildren: () => import('src/app/components/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: CommonConstants.Routes.ProfileDetails,
    loadChildren: () => import('src/app/components/profile-details/profile-details.module').then(m => m.ProfileDetailsModule)
  },
  {
    path: CommonConstants.Routes.Listing,
    loadChildren: () => import('src/app/components/listing/listing.module').then(m => m.ListingModule)
  },
  {
    path: CommonConstants.Routes.AddtionalDetails,
    loadChildren: () => import('src/app/components/additional-details/additional-details.module').then(m => m.AddtionalDetailsModule)
  },
  {
    path: CommonConstants.Routes.ThankYou,
    loadChildren: () => import('src/app/components/thank-you/thankYou.module').then(m => m.thankYouModule)
  },
  {
    path: '**',
    loadChildren: () => import('src/app/components/landing/landing.module').then(m => m.LandingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
