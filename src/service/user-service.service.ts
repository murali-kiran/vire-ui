import { Profile,Users } from './../model/models';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import * as AppConstants from './../constants/app.constants';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  public getAllUsers(currentPage: number, pageSize: number): Observable<Users> {
    return this.http.get<Users>(AppConstants.ADMIN_USERS,{
       params: new HttpParams()
        .set('page',currentPage)
        .set('size',pageSize) }
    );
  }

  public getFirmUsers(search: string,currentPage: number, pageSize: number): Observable<Users> {
    return this.http.get<Users>(AppConstants.FIRM_USERS, { params: new HttpParams()
    .set('search', search)
    .set('page',currentPage)
    .set('size',pageSize) });
  }

  public blockUser(profileId: string, isBlock: boolean): Observable<Boolean> {
    return this.http.get<Boolean>(AppConstants.BLOCK_USER+"/"+profileId, { params: new HttpParams().set('isBlocked', isBlock) });
  }

  public deleteUser(profileId: string): Observable<Profile> {
    return this.http.get<Profile>(AppConstants.DELETE_USER+"/"+profileId);
  }
  
  
}
