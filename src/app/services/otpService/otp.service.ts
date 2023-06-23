import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  constructor(private HttpClient:HttpClient) { }

  otp(data:object){

    // http://127.0.0.1:8000/api/loginWithOtp
    return this.HttpClient.post('http://10.128.51.123:880/api/otp/login' , data);


  }
}
