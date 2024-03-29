import { Injectable } from '@angular/core';
import { CommonConstants } from 'src/app/shared/constants/comman-constants';
import {HttpBackend, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  private httpClient: HttpClient;
  constructor(  private handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
   }

  public loginUser(reqData: any){
    const url = CommonConstants.APIURL.login;
    return this.httpClient.post(url, reqData);
  }
}
