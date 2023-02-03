import { AdminmessageService } from './../../service/adminmessage.service';
import { Profile, Users, AdminMessage } from './../../model/models';
import { UserService } from './../../service/user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css','./../../assets/css/spinner.css']
})
export class UsersComponent implements OnInit {

  profiles : Profile [];
  selectedProfile ?: Profile;
  pageCount : number;
  currentPage: number = 1;
  pageSize : number = 20;
  isLoading : boolean = true;
  isAdminMsgBtn : boolean = true;
  adminMsg: string = '';

  constructor(private userService: UserService,private adminmessageService:AdminmessageService) { 
  }

  ngOnInit(): void {
    this.retriveAllusers(this.currentPage,this.pageSize);
  }

  retriveAllusers = (currentPage: number, pageSize: number)=>{
    this.userService.getAllUsers(currentPage,pageSize).subscribe(data=>{
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

      var block = (this.selectedProfile && this.selectedProfile.isBlocked)?"unblocked":"blocked";
      alert("User account "+block+" sucessfully");

      if(data && this.selectedProfile)
        this.selectedProfile.isBlocked = !this.selectedProfile.isBlocked;
  
    });
  }

  onDeleteUser = (profile : Profile)=>{

    this.userService.deleteUser(profile.profileId).subscribe(data=>{
      this.currentPage = 1;
      this.retriveAllusers(this.currentPage, this.pageSize);
      this.selectedProfile = undefined;
      alert("User account deleted sucessfully");
    });

  }

  onPageSelection = (pageNumber: number)=>{
    if(this.currentPage!=pageNumber){
      this.currentPage = pageNumber;
      this.isLoading = true;
      this.retriveAllusers(this.currentPage, this.pageSize);
    }
  }

  toggleAdminMsg = ()=>{
    this.adminMsg = '';
    this.isAdminMsgBtn = !this.isAdminMsgBtn;
  }

  sendAdminMessage = ()=>{
    var adminMsg:AdminMessage = {
      messageType: "users",
      message : this.adminMsg
    }
    this.adminmessageService.sendAdminMessage(adminMsg).subscribe({
      next:(data)=>{
        this.adminMsg='';
        this.isAdminMsgBtn = true;
        alert("Admin message sent successfully");
      },
      error:(error)=>{
        this.adminMsg='';
        alert("Admin message failed to sent");
      }
    });
    
  }



}
