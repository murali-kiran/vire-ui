import { Injectable } from '@angular/core';
import { Socials, Social } from './../model/models';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as AppConstants from './../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor(private http: HttpClient) { }

  public getAllSocial(currentPage: number, pageSize: number): Observable<Socials> {
    return this.http.get<Socials>(AppConstants.ALL_SOCIALS,{ params: new HttpParams()
      .set('page',currentPage)
      .set('size',pageSize) });
  }

  public deleteSocial(socialId: string): Observable<Social> {
     return this.http.delete<Social>(AppConstants.SOCIAL_BASE_URL+"/"+socialId);
  }

}
