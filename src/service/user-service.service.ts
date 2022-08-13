import { Profile } from './../model/profile';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import * as AppConstants from './../constants/app.constants';

@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8090/api/v1/social/all';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

  public getAllUsers(): Observable<Profile[]> {
    return this.http.get<Profile[]>(AppConstants.ADMIN_USERS);
  }

  public getFirmUsers(search: string): Observable<Profile[]> {
    return this.http.get<Profile[]>(AppConstants.FIRM_USERS, { params: new HttpParams().set('search', search) });
  }

  public blockUser(profileId: string, isBlock: boolean): Observable<Boolean> {
    return this.http.get<Boolean>(AppConstants.BLOCK_USER+"/"+profileId, { params: new HttpParams().set('isBlocked', isBlock) });
  }

  public deleteUser(profileId: string): Observable<Profile> {
    return this.http.get<Profile>(AppConstants.DELETE_USER+"/"+profileId);
  }
  
  
}
