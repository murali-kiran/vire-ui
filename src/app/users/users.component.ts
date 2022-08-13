import { Profile } from './../../model/profile';
import { UserService } from './../../service/user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  profiles : Profile [];
  selectedProfile ?: Profile;

  constructor(private userService: UserService) { 
  }

  ngOnInit(): void {
    this.retriveAllusers();
    console.log("#### :: "+this.selectedProfile);
  }

  retriveAllusers = ()=>{
    this.userService.getAllUsers().subscribe(data=>{
      this.profiles=data;
    });
  }

  onItemChange = (profile : Profile) => {
    this.selectedProfile = profile;
    console.log(profile);
  }

  onBlockUser = (profile : Profile, isBlocked: boolean)=>{
    this.userService.blockUser(profile.profileId,isBlocked).subscribe(data=>{

      if(data && this.selectedProfile)
        this.selectedProfile.isBlocked = !this.selectedProfile.isBlocked;
      
    });
  }

  onDeleteUser = (profile : Profile)=>{

    this.userService.deleteUser(profile.profileId).subscribe(data=>{
      this.retriveAllusers();
      this.selectedProfile = undefined;
    });

  }


}
