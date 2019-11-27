import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class StoresClientService {
  urlStore = 'http://localhost:9080/crmproject-web/rest/stores/';
  constructor(private http: HttpClient) { }

getRestaurants() {
  return this.http.get(this.urlStore+"allstores") ;
  }

  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }
}
