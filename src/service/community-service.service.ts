import { Community, Communities } from './../model/models';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as AppConstants from './../constants/app.constants';

@Injectable()
export class CommunityService {

  constructor(private http: HttpClient) { }

  public getAllCommunities(currentPage: number, pageSize: number): Observable<Communities> {
    return this.http.get<Communities>(AppConstants.ALL_COMMUNITIES,{ params: new HttpParams()
      .set('page',currentPage)
      .set('size',pageSize) });
  }

  public blockCommunity(communityId: string, isBlock: boolean): Observable<Boolean> {
    return this.http.get<Boolean>(AppConstants.BLOCK_COMMUNITY+"/"+communityId, { params: new HttpParams().set('isBlocked', isBlock) });
  }

  public deleteCommunity(communityId: string): Observable<Community> {
    return this.http.delete<Community>(AppConstants.DELETE_COMMUNITY+"/"+communityId);
  }

  public createCommunity(community: Community): Observable<Community> {
    return this.http.post<Community>(AppConstants.DELETE_COMMUNITY,community);
  }

}
