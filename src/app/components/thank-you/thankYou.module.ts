import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ThankYouComponent } from './thank-you.component';

const thankYouRoute: Routes = [{
  path: '',
  component: ThankYouComponent
}];

@NgModule({
  declarations: [
    ThankYouComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(thankYouRoute),
  ],
  exports: [RouterModule]
})
export class thankYouModule { }