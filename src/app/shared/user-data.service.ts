import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
 // baseUrl = "https://dashboard.free.beeceptor.com/all-data";
 baseUrl = "https://mocki.io/v1/b8d69ada-908f-4d70-97a9-c7dba1b99126"
   
 dataService:any; 

  userData = new Subject<any>();

  constructor(
    private http : HttpClient,
  ) {}

   getAllUsers(){
    return this.http.get(this.baseUrl);
 }
}