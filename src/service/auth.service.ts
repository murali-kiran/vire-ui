import { Router } from '@angular/router';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Subject, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import * as AppConstants from './../constants/app.constants'

export interface AuthResponseData {
  email: string,
  expiresIn: string,
}

export class LoginUser {
  constructor(
      public email: string,
      private _tokenExpirationDate: Date
  ){}

}



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<LoginUser|any>(null);
  token = null;
  private tokenExpirationTimer: any;
  isAuth: boolean = false;

  constructor(private httpClient : HttpClient, private router: Router){

  }

  login(email: string, password: string){

    return this.httpClient.post<AuthResponseData>(
        AppConstants.ADMIN_PORTAL_LOGIN,
        {  
            emailOrphonenumber: email,
            password: btoa(password)
        }
    )
    .pipe(catchError(this.handleError),tap(resData => {
        this.handleAuthentication(resData.email,/*resData.localId,resData.idToken,*/+resData.expiresIn)
    }));

}



logout() {
    // set user to null;
    this.user.next(null);
    this.isAuth=false;
    localStorage.removeItem('userData');
    this.router.navigate(['/auth']);   
    if(this.tokenExpirationTimer) {
        clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
}

autoLogout(expirationDuration: number){
    this.tokenExpirationTimer = setTimeout(()=>{
        this.logout();
    },expirationDuration);
}

autoLogin() {

    let userData: {
        email: string,
        _tokenExpirationDate: Date
    } = JSON.parse(localStorage.getItem('userData')|| '{}');
     

    if(!userData || ( Object.keys(userData).length === 0 && Object.getPrototypeOf(userData) === Object.prototype )){
        return;
    }

    const loadedUser = new LoginUser(userData.email,userData._tokenExpirationDate);

     if(loadedUser){
         this.user.next(loadedUser);
         const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
         //this.autoLogout(expirationDuration);
     }
}

private handleAuthentication(email: string, expiresIn: number) {
  const expirationDate = new Date(expiresIn);
      const user = new LoginUser(email, 
                          expirationDate);
      this.user.next(user);
      //this.isAuth = true;
      //this.autoLogout(expiresIn);
      localStorage.setItem('userData',JSON.stringify(user));
}

private handleError(errorRes : HttpErrorResponse){
        let errorMessage = 'An unknown error occured';

        if(!errorRes.error || !errorRes.error.error){
            return throwError(errorMessage);
        }
        switch(errorRes.error.error.message){
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exists';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'This passsword is not correct';
                break;
        }

        return throwError(errorMessage);
}

}
