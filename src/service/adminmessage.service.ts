import { Observable } from 'rxjs';
import { AdminMessage, AdminMessages } from './../model/models';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as AppConstants from './../constants/app.constants';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AdminmessageService extends CommonService{

  constructor(public httpClient: HttpClient) {
    super();
   }

  public sendAdminMessage(adminMessageRequest : AdminMessage): Observable<AdminMessage> {
    return this.httpClient.post<AdminMessage>(AppConstants.INSERT_ADMIN_MESSAGE,adminMessageRequest);
  }

  public editAdminMessage(adminMessageRequest : AdminMessage): Observable<AdminMessage> {
    return this.httpClient.put<AdminMessage>(AppConstants.UPDATE_ADMIN_MESSAGE,adminMessageRequest);
  }

  public getAllAdminMessages(currentPage: number, pageSize: number): Observable<AdminMessages> {
    return this.httpClient.get<AdminMessages>(AppConstants.ALL_ADMIN_MESSAGES,{
      params: new HttpParams()
       .set('page',currentPage)
       .set('size',pageSize) });
  }

  public deleteAdminMessage(adminMessagesId ?: string): Observable<AdminMessage> {
    return this.httpClient.delete<AdminMessage>(AppConstants.DELETE_ADMIN_MESSAGE+"/"+adminMessagesId);
  }

}
