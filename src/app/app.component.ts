import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string;
  mainContent: string = "home";
  isAuth: boolean = true;

  private userSub: Subscription;
  isAuthenticated = false;

  constructor(public authService: AuthService,private router:Router) {
    this.title = 'VIRE';   
  }


  ngOnInit(): void {
    // this.userSub = this.authService.user.subscribe(user=>{
    //   this.isAuthenticated = !user ? false : true;      
    // });
    this.authService.autoLogin();
  }

  triggerMenuItem = (menuItem: string)=>{
    this.router.navigate([menuItem]);
  }

  loadedFeature = 'home';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  onLogout = ()=>{
    this.authService.logout()
  }
  
}