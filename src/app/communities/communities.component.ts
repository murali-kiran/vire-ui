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

  constructor(private communityService:CommunityService) { }


  ngOnInit(): void {
    this.retriveAllCommunties();
  }

  retriveAllCommunties = ()=>{
    this.communityService.getAllCommunities().subscribe(data=>{
      this.communities=data;
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
      this.retriveAllCommunties();
      this.selectedCommunity = undefined;
    });

  }

}
