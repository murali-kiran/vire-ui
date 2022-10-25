import { Master } from 'src/model/models';
import { CommonService } from './common.service';
import { Injectable } from '@angular/core';
import * as AppConstants from './../constants/app.constants';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService extends CommonService {

  constructor(private http: HttpClient) { 
    super();
  }

  public getAllMasterData(): Observable<Map<string,Master[]>> {
    return this.http.get<Map<string,Master[]>>(AppConstants.ALL_MASTER_DATA);
  }

  public deleteMaster(masterId: number):  Observable<Master> {     
      return this.http.delete<Master>(AppConstants.DELETE_MASTER_DATA+masterId);    
    //return this.http.delete<Master>(AppConstants.DELETE_MASTER_DATA+masterId);
  }

  public updateMaster(master:Master):  Observable<Master> {
    return this.http.put<Master>(AppConstants.UPDATE_MASTER_DATA,master);
  }

  public createMaster(master:Master):  Observable<any> {
    return this.http.post<any>(AppConstants.CREATE_MASTER_DATA,master);
  }


}
