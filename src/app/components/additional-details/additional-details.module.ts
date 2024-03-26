import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdditionalDetailsComponent } from './additional-details.component';

const addtionalDetailsRoute: Routes = [{
  path: '',
  component: AdditionalDetailsComponent
}];

@NgModule({
  declarations: [
    AdditionalDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(addtionalDetailsRoute),
  ],
  exports: [RouterModule]
})
export class AddtionalDetailsModule { }