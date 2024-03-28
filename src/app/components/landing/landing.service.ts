import { Injectable } from '@angular/core';
import { CommonConstants } from 'src/app/shared/constants/comman-constants';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor() { }

  public loginUser(){
    const url = CommonConstants.APIURL.login;
  }
}
