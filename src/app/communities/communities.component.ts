import { CommunityService } from './../../service/community-service.service';
import { Community } from './../../model/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css']
})
export class CommunitiesComponent implements OnInit {

  communities : Community [];
  selectedCommunity ?: Community;
  pageCount : number;
  currentPage: number = 1;
  pageSize : number = 3;

  constructor(private communityService:CommunityService) { }


  ngOnInit(): void {
    this.retriveAllCommunties(this.currentPage,this.pageSize);
  }

  retriveAllCommunties = (currentPage: number, pageSize: number)=>{
    this.communityService.getAllCommunities(currentPage,pageSize).subscribe(data=>{
      this.pageCount = data.pageCount;
      this.communities=data.list;
    });
  }

  onItemChange = (community : Community) => {
    this.selectedCommunity = community;
    console.log(community);
  }

  onBlockCommunity = (community : Community, isBlocked : boolean)=>{
    this.communityService.blockCommunity(community.communityId,isBlocked).subscribe(data=>{

      if(data && this.selectedCommunity)
        this.selectedCommunity.isBlocked = !this.selectedCommunity.isBlocked;  

    });
  }

  onDeleteCommunity = (community : Community)=>{

    this.communityService.deleteCommunity(community.communityId).subscribe(data=>{
      this.currentPage = 1;
      this.retriveAllCommunties(this.currentPage,this.pageSize);
      this.selectedCommunity = undefined;
    });

  }

  onPageSelection = (pageNumber: number)=>{
    if(this.currentPage!=pageNumber){
      this.currentPage = pageNumber;
      this.retriveAllCommunties(this.currentPage, this.pageSize);
    }
  }

}
