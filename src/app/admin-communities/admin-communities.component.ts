import { Community } from './../../model/models';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-communities',
  templateUrl: './admin-communities.component.html',
  styleUrls: ['./admin-communities.component.css']
})
export class AdminCommunitiesComponent implements OnInit {

  @ViewChild('f', { static: false }) communityForm: NgForm;
  selectedItem : string = 'createCommunity';

  community: Community = {communityId:''};

  constructor() { }

  ngOnInit(): void {
  }

  showCreateCommunity = (selectedItem:string)=>{
    this.selectedItem = selectedItem;
  }

  showAllAdminCommunity = (selectedItem:string)=>{
    this.selectedItem = selectedItem;
  }

  onSubmitCommunityCreation = ()=>{
    this.community.name = this.communityForm.value.communityData.communityName;
    this.community.description = this.communityForm.value.communityData.aboutCommunity;
    this.community.rules = this.communityForm.value.communityData.rulesAndRegulations;
  }

}
