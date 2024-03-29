import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonConstants } from 'src/app/shared/constants/comman-constants';
import { ProfileDetailsService } from './profile-details.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  public profileForm!: FormGroup;
  public isMobileDevice!:boolean;
  public applicationKey: any;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileDetailsService,
    private router: Router
  ) { }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    setTimeout(() => {
      this.isMobileDevice = window.innerWidth < 600 ? true : false;
    }, 100);
  }
  @HostListener('window:load', ['$event'])
  onWindowLoad() {
      this.isMobileDevice = window.innerWidth < 600 ? true : false;
  }

  ngOnInit(): void {
    this.applicationKey = sessionStorage.getItem('applicationKey');
    // this.applicationKey = 123456789;
    this.profileService.profileGet(this.applicationKey).subscribe({
      next: (res: any) => {
        console.log('res', res);
        this.prefilledData(res);
      }
    })
    this.buildForm();
  }

  public buildForm() {
    this.profileForm = this.fb.group({
      fullName: [
        '', Validators.compose([Validators.required])],
      salary: [
          '', Validators.compose([Validators.required])],
      pan: ['', {
        validators: [
          Validators.required,
          Validators.pattern('^[a-zA-Z]{3}[pP]{1}[a-zA-Z]{1}[0-9]{4}[a-zA-Z]{1}$')]
      }],
      email: ['', {
        validators: [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9](?!.*([._-])\\1)([a-zA-Z0-9._-]*[a-zA-Z0-9])*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,3}$')]
      }],
      address: [
        '', Validators.compose([Validators.required])],
        tnc: [
          '', Validators.compose([Validators.requiredTrue])],
    })
  }

  public proceedNext() {
    const payload = {
      fullName: this.profileForm.controls['fullName'].value,
      email: this.profileForm.controls['email'].value,
      pan: this.profileForm.controls['pan'].value,
      salary: this.profileForm.controls['salary'].value,
      address: this.profileForm.controls['address'].value,
      applicationKey: this.applicationKey
    }
    this.profileService.profilePost(payload).subscribe({
      next: (res: any) => {
        console.log('res', res);
        this.router.navigate([CommonConstants.Routes.Listing]);
      }
    })
  }

  public prefilledData(userDetails: any){
    if(Object.keys(userDetails)){
      this.profileForm.controls['fullName'].setValue(userDetails.fullName);
      this.profileForm.controls['email'].setValue(userDetails.email);
      this.profileForm.controls['pan'].setValue(userDetails.pan);
      this.profileForm.controls['salary'].setValue(userDetails.salary);
      this.profileForm.controls['address'].setValue(userDetails.address);
    }
  }
}
