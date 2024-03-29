import { CommonService } from './common.service';
import { Feeds,Feed } from './../model/models';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as AppConstants from './../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class FeedService extends CommonService{

  constructor(private http: HttpClient) { 
    super();
  }

  public getAllFeeds(): Observable<Feed []> {
    return this.http.get<Feed[]>(AppConstants.ALL_FEEDS);
  }

  public deleteFeed(feedId: string): Observable<Feed> {
    return this.http.delete<Feed>(AppConstants.FEEDS_BASE_URL+"/"+feedId);
  }

}
