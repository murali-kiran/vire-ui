import { Community } from './../model/models';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as AppConstants from './../constants/app.constants';

@Injectable()
export class CommunityService {

  constructor(private http: HttpClient) { }

  public getAllCommunities(): Observable<Community[]> {
    return this.http.get<Community[]>(AppConstants.ALL_COMMUNITIES);
  }

  public blockCommunity(communityId: string, isBlock: boolean): Observable<Boolean> {
    return this.http.get<Boolean>(AppConstants.BLOCK_COMMUNITY+"/"+communityId, { params: new HttpParams().set('isBlocked', isBlock) });
  }

  public deleteCommunity(communityId: string): Observable<Community> {
    return this.http.delete<Community>(AppConstants.COMMUNITY_BASE_URL+"/"+communityId);
  }

}
