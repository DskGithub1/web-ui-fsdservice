import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonConstants } from 'src/app/shared/constants/comman-constants';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent {

  constructor(
    private router: Router
  ) { }

  public backToLandingPage(){
    this.router.navigate([CommonConstants.Routes.Login]);
  }
}
