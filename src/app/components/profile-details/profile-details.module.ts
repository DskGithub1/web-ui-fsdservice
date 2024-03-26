import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDetailsComponent } from './profile-details.component';

const profileRoute: Routes = [{
  path: '',
  component: ProfileDetailsComponent
}];

@NgModule({
  declarations: [
    ProfileDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(profileRoute),
  ],
  exports: [RouterModule]
})
export class ProfileDetailsModule { }
