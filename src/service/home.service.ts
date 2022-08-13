import { Home } from './../model/home';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as AppConstants from './../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  constructor(private http: HttpClient) { }

  public getHomePageData(): Observable<Home> {
    return this.http.get<Home>(AppConstants.ADMIN_HOME_URL);
  }

}
