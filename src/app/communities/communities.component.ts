import { CommunityService } from './../../service/community-service.service';
import { Community, AdminMessage } from './../../model/models';
import { Component, OnInit } from '@angular/core';
import { AdminmessageService } from 'src/service/adminmessage.service';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css','./../../assets/css/spinner.css']
})
export class CommunitiesComponent implements OnInit {

  communities : Community [];
  selectedCommunity ?: Community;
  pageCount : number;
  currentPage: number = 1;
  pageSize : number = 10;
  isLoading : boolean = true;
  isAdminMsgBtn : boolean = true;
  adminMsg: string = '';

  constructor(private communityService:CommunityService,private adminmessageService:AdminmessageService) { }


  ngOnInit(): void {
    this.retriveAllCommunties(this.currentPage,this.pageSize);
  }

  retriveAllCommunties = (currentPage: number, pageSize: number)=>{
    this.communityService.getAllCommunities(currentPage,pageSize).subscribe(data=>{
      this.pageCount = data.pageCount;
      this.communities=data.list;
      this.isLoading = false;
    });
  }

  onItemChange = (community : Community) => {
    this.selectedCommunity = community;
    console.log(community);
  }

  onBlockCommunity = (community : Community, isBlocked : boolean)=>{
    this.communityService.blockCommunity(community.communityId,isBlocked).subscribe(data=>{

      var block = (this.selectedCommunity && this.selectedCommunity.isBlocked)?"unblocked":"blocked";
      alert("Community "+block+" sucessfully");

      if(data && this.selectedCommunity)
        this.selectedCommunity.isBlocked = !this.selectedCommunity.isBlocked;  

    });
  }

  onDeleteCommunity = (community : Community)=>{

    this.communityService.deleteCommunity(community.communityId).subscribe(data=>{
      this.currentPage = 1;
      this.retriveAllCommunties(this.currentPage,this.pageSize);
      this.selectedCommunity = undefined;
      alert("Community deleted successfully");
    });

  }

  onPageSelection = (pageNumber: number)=>{
    if(this.currentPage!=pageNumber){
      this.isLoading = true;
      this.currentPage = pageNumber;
      this.retriveAllCommunties(this.currentPage, this.pageSize);
    }
  }

  toggleAdminMsg = ()=>{
    this.adminMsg = '';
    this.isAdminMsgBtn = !this.isAdminMsgBtn;
  }

  sendAdminMessage = ()=>{
    var adminMsg:AdminMessage = {
      messageType: "communities",
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
