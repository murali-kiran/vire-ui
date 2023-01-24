import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit {

  constructor(private router:Router) {       
  }

  ngOnInit(): void {
  }

  triggerMenuItem = (menuItem: string)=>{
    this.router.navigate([menuItem]);
  }

}
