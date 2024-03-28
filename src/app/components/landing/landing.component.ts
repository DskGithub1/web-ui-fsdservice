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
    this.buildForm();
  }

  public buildForm() {
    this.landingForm = this.fb.group({
      mobileNumber: [
        '', Validators.compose([
          Validators.required, Validators.pattern('[6789][0-9]{9}')]),],
      dateOfBirth: ['', {
        validators: [
          Validators.required,
          Validators.pattern('^([0-2][0-9]|(3)[0-1])(/)(((0)[0-9])|((1)[0-2]))(/)[0-9]{4}$')]
      }],
    })
  }

  proceedNext() {
    
  }

  checkDob(){
    let age = this.getAge(this.landingForm.controls['dateOfBirth'].value)
    if(age<18){
      this.landingForm.controls['dateOfBirth'].setErrors({'adult': true});
    }
    else{
      this.landingForm.controls['dateOfBirth'].setErrors(null);
    }
  }

  getAge(dateString: string) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

}
