import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonConstants } from 'src/app/shared/constants/comman-constants';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private httpClient: HttpClient;

  constructor(private handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  public listingGet(appId: any){
    const url = CommonConstants.APIURL.listingGet.replace('{applicationid}', appId);
    return this.httpClient.get(url);
  }
}
