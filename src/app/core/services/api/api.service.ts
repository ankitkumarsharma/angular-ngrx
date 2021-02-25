import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../app.constant';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  requestBody!: object
  readonly BASE_URL:any;
  constructor(private http: HttpClient) {
    this.BASE_URL = BASE_URL;
  }
  // call via GET method
  get(url: string){
    return this.http.get(`${this.BASE_URL}/${url}`);
  }
  // call via POST method
  post(url: string, payload?: object){
    if(payload){
      this.requestBody = {
        "input": payload
      }
    } else {
      this.requestBody = {};
    }
    return this.http.post(`${this.BASE_URL}/${url}`, this.requestBody);
  }
  // call via PATCH method
  patch(url: string, payload?: object){
    if(payload){
      this.requestBody = {
        "input": payload
      }
    } else {
      this.requestBody = {};
    }
    return this.http.patch(`${this.BASE_URL}/${url}`, this.requestBody);
  }
  // call via DELETE method
  delete(url: string){
    return this.http.delete(`${this.BASE_URL}/${url}`);
  }
}
