import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public landingForm!: FormGroup;
  public isMobileDevice!:boolean;

  constructor(
    private fb: FormBuilder
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

  }

  public buildForm() {
    this.landingForm = this.fb.group({
      mobileNumber: [
        '', Validators.compose([
          Validators.required, Validators.pattern('^\\d{10}$')]),],
      dateOfBirth: ['', {
        validators: [
          Validators.required,
          Validators.pattern('^([0-2][0-9]|(3)[0-1])(/)(((0)[0-9])|((1)[0-2]))(/)[0-9]{4}$')]
      }],
    })
  }

  proceedNext() {
    
  }

}
