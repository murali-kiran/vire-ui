import { Component, OnInit } from '@angular/core';
import { UserService } from './../../service/user-service.service';
import { Profile } from './../../model/models';

@Component({
  selector: 'app-blocklist',
  templateUrl: './blocklist.component.html',
  styleUrls: ['./blocklist.component.css','./../../assets/css/spinner.css']
})
export class BlocklistComponent implements OnInit {

  profiles : Profile [];
  selectedProfile ?: Profile;
  pageCount : number;
  currentPage: number = 1;
  pageSize : number = 10;
  isLoading : boolean = true;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.retriveAllusers(this.currentPage,this.pageSize);
  }

  retriveAllusers = (currentPage: number, pageSize: number)=>{
    this.userService.getAllBlockedUsers(currentPage,pageSize).subscribe(data=>{
      this.pageCount = data.pageCount;
      this.profiles=data.list;
      this.isLoading = false;
    });
  }

  onItemChange = (profile : Profile) => {
    this.selectedProfile = profile;
    console.log(profile);
  }

  onBlockUser = (profile : Profile, isBlocked: boolean)=>{
    this.userService.blockUser(profile.profileId,isBlocked).subscribe(data=>{
      this.currentPage = 1;
      this.retriveAllusers(this.currentPage, this.pageSize);
      this.selectedProfile = undefined;
      
    });
  }

  onDeleteUser = (profile : Profile)=>{

    this.userService.deleteUser(profile.profileId).subscribe(data=>{
      this.currentPage = 1;
      this.retriveAllusers(this.currentPage, this.pageSize);
      this.selectedProfile = undefined;
    });

  }

  onPageSelection = (pageNumber: number)=>{
    if(this.currentPage!=pageNumber){
      this.currentPage = pageNumber;
      this.isLoading = true;
      this.retriveAllusers(this.currentPage, this.pageSize);
    }
  }

}
