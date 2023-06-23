import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  login(data:object){

       return this.httpClient.post('http://10.128.51.123:880/api/loginwithUnamePWKey' , data);

  }


}
