import { Home } from './../../model/home';
import { HomeService } from './../../service/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  homeReponse: Home;

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    
    this.homeService.getHomePageData().subscribe(data=>{
      this.homeReponse = data;
      console.log(data);
    });

  }

}
