import { AppRestriction } from './../model/models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as AppConstants from './../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ApprestrictionService {

  constructor(private http: HttpClient) { }

  public getAppRestriction(): Observable<AppRestriction> {
    return this.http.get<AppRestriction>(AppConstants.ADMIN_GET_APP_RESTRICTION);
  }

  public updateAppRestriction(appRestriction: AppRestriction): Observable<AppRestriction> {
     return this.http.put<AppRestriction>(AppConstants.ADMIN_UPDATE_APP_RESTRICTION,appRestriction);
  }

}
