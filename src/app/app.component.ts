import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string;
  mainContent: string = "home";

  constructor(private router:Router) {
    this.title = 'Spring Boot - Angular Application';
    
  }

  ngOnInit(){
    this.router.navigate(['home']);
  }

  triggerMenuItem = (menuItem: string)=>{
    this.router.navigate([menuItem]);
  }
  
}