import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const landingRoute: Routes = [{
  path: '',
  component: LandingComponent
}];

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(landingRoute),
    SharedModule
  ],
  exports: [RouterModule]
})
export class LandingModule { }
