import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonConstants } from 'src/app/shared/constants/comman-constants';

@Injectable({
  providedIn: 'root'
})
export class ProfileDetailsService {
  private httpClient: HttpClient;
  constructor(  private handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
   }

  public profileGet(appId: any){
    const url = CommonConstants.APIURL.profileGet.replace('{applicationid}', appId);
    return this.httpClient.get(url);
  }
  public profilePost(reqData: any){
    const url = CommonConstants.APIURL.profilePost;
    return this.httpClient.post(url, reqData);
  }
}
