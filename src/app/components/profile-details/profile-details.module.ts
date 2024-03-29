import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDetailsComponent } from './profile-details.component';
import { SharedModule } from 'src/app/shared/shared.module';

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
    SharedModule
  ],
  exports: [RouterModule]
})
export class ProfileDetailsModule { }
