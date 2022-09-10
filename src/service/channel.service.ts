import { Observable } from 'rxjs';
import { Channels,Channel } from './../model/models';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as AppConstants from './../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private http: HttpClient) { }

  public getAllChannels(currentPage: number, pageSize: number): Observable<Channels> {
    return this.http.get<Channels>(AppConstants.ALL_CHANNELS,{ params: new HttpParams()
      .set('page',currentPage)
      .set('size',pageSize) });
  }

  // public blockChannel(channelId: string, isBlock: boolean): Observable<Boolean> {
  //   return this.http.get<Boolean>(AppConstants.BLOCK_CHANNEL+"/"+channelId, { params: new HttpParams().set('isBlocked', isBlock) });
  // }

  public deleteChannel(channelId: string): Observable<Channel> {
    return this.http.delete<Channel>(AppConstants.CHANNEL_BASE_URL+"/"+channelId);
  }

}
