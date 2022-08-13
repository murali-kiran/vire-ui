import { Component, OnInit } from '@angular/core';
import { Profile } from './../../model/profile';
import { UserService } from './../../service/user-service.service';

@Component({
  selector: 'app-firm-accounts',
  templateUrl: './firm-accounts.component.html',
  styleUrls: ['./firm-accounts.component.css']
})
export class FirmAccountsComponent implements OnInit {

  profiles : Profile [];
  selectedProfile ?: Profile;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.retriveAllusers();
  }

  retriveAllusers = ()=>{
    this.userService.getFirmUsers('profileType:firm').subscribe(data=>{
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
