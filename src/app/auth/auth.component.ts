import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent  {

  isLoginMode = true;
  isLoading = false;
  error:string;

  constructor(private authService:AuthService,private router:Router){
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if(!form.valid){
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    authObs = this.authService.login(email,password);
    
    // if(this.isLoginMode){
    //   authObs = this.authService.login(email,password);
    // }else {
    //   authObs = this.authService.signUp(email,password);
    // }

    authObs.subscribe(
      resData =>{
        this.isLoading = false;
        this.router.navigate(['/home']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = "Authentication failed, Please Try!";
        this.isLoading = false;
      }
    )

    form.reset();
  }

}
