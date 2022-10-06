import { Component, OnInit } from '@angular/core';
import { Profile } from './../../model/models';
import { UserService } from './../../service/user-service.service';

@Component({
  selector: 'app-firm-accounts',
  templateUrl: './firm-accounts.component.html',
  styleUrls: ['./firm-accounts.component.css']
})
export class FirmAccountsComponent implements OnInit {

  profiles : Profile [];
  selectedProfile ?: Profile;
  pageCount : number;
  currentPage: number = 1;
  pageSize : number = 10;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.retriveAllusers(this.currentPage,this.pageSize);
  }

  retriveAllusers = (currentPage: number, pageSize: number)=>{
    this.userService.getFirmUsers('profileType:firm',this.currentPage, this.pageSize).subscribe(data=>{
      this.pageCount = data.pageCount;
      this.profiles  = data.list;
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
      this.currentPage = 1;
      this.retriveAllusers(this.currentPage,this.pageSize);
      this.selectedProfile = undefined;
    });

  }

  onPageSelection = (pageNumber: number)=>{
    if(this.currentPage!=pageNumber){
      this.currentPage = pageNumber;
      this.retriveAllusers(this.currentPage, this.pageSize);
    }
  }

}
