import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './listing.component';

const listingRoute: Routes = [{
  path: '',
  component: ListingComponent
}];

@NgModule({
  declarations: [
    ListingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(listingRoute),
  ],
  exports: [RouterModule]
})
export class ListingModule { }