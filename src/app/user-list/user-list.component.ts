import { Component, OnInit } from '@angular/core';
import { LandingService } from 'src/service/landing.service';
import { User } from '../../model/user';
import { UserService } from '../../service/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  profileCount: number = 0;

  constructor(private userService: UserService,private landingSevice: LandingService) {
  }

  ngOnInit() {
    
    /*this.userService.findAll().subscribe((data: User[]) => {
      this.users = data;
    });*/

    this.landingSevice.getTotalUsers().subscribe(data=>{
      this.profileCount = data;
    });

  }
}
