import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

const LANDING_PAGE_BASE_URL = '/api/profile';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(private http: HttpClient) { }

  getTotalUsers = ()=>{
    return this.http.get<number>(LANDING_PAGE_BASE_URL+'/all');
  }


}
