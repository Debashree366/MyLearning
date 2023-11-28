import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  baseUrl = "https://dashboard.free.beeceptor.com/all-data";

  constructor(
    private http : HttpClient,
  ) {}

   getAllUsers(){
    return this.http.get(this.baseUrl);
 }
}