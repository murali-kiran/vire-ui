import { AdminmessageService } from './../../service/adminmessage.service';
import { Component, OnInit } from '@angular/core';
import { AdminMessage, Profile } from './../../model/models';
import { UserService } from './../../service/user-service.service';

@Component({
  selector: 'app-firm-accounts',
  templateUrl: './firm-accounts.component.html',
  styleUrls: ['./firm-accounts.component.css','./../../assets/css/spinner.css']
})
export class FirmAccountsComponent implements OnInit {

  profiles : Profile [];
  selectedProfile ?: Profile;
  pageCount : number;
  currentPage: number = 1;
  pageSize : number = 10;
  isLoading : boolean = true;
  isAdminMsgBtn : boolean = true;
  adminMsg: string = '';

  constructor(private userService: UserService,private adminmessageService:AdminmessageService) { }

  ngOnInit(): void {
    this.retriveAllusers(this.currentPage,this.pageSize);
  }

  retriveAllusers = (currentPage: number, pageSize: number)=>{
    this.userService.getFirmUsers('profileType:firm',this.currentPage, this.pageSize).subscribe(data=>{
      this.pageCount = data.pageCount;
      this.profiles  = data.list;
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
      alert("Firm accountv"+block+" sucessfully");

      if(data && this.selectedProfile)
        this.selectedProfile.isBlocked = !this.selectedProfile.isBlocked;

      
      
    });
  }

  onDeleteUser = (profile : Profile)=>{

    this.userService.deleteUser(profile.profileId).subscribe(data=>{
      this.currentPage = 1;
      this.retriveAllusers(this.currentPage,this.pageSize);
      this.selectedProfile = undefined;
      alert("Firm account deleted sucessfully");
    });

  }

  onPageSelection = (pageNumber: number)=>{
    if(this.currentPage!=pageNumber){
      this.isLoading = true;
      this.currentPage = pageNumber;
      this.retriveAllusers(this.currentPage, this.pageSize);
    }
  }

  toggleAdminMsg = ()=>{
    this.adminMsg = '';
    this.isAdminMsgBtn = !this.isAdminMsgBtn;
  }

  sendAdminMessage = ()=>{
    var adminMsg:AdminMessage = {
      messageType: "firm profile",
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
