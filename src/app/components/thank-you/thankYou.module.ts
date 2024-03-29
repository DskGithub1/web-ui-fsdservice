import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ThankYouComponent } from './thank-you.component';
import { SharedModule } from 'src/app/shared/shared.module';

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
    SharedModule
  ],
  exports: [RouterModule]
})
export class thankYouModule { }