import { CommonService } from './common.service';
import { Experiences,Experience } from './../model/models';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as AppConstants from './../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService extends CommonService{

  constructor(private http: HttpClient) {
    super();
   }

  public getAllExperiences(currentPage: number, pageSize: number): Observable<Experiences> {
    return this.http.get<Experiences>(AppConstants.ALL_EXPERIENCES,{ params: new HttpParams()
      .set('page',currentPage)
      .set('size',pageSize) });
  }

  public deleteExperience(experienceId: string): Observable<Experience> {
    return this.http.delete<Experience>(AppConstants.EXPERIENCE_BASE_URL+"/"+experienceId);
  }

}
