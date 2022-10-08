import { Social } from './../../model/models';
import { Component, OnInit } from '@angular/core';
import { SocialService } from 'src/service/social.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css','./../../assets/css/spinner.css']
})
export class SocialComponent implements OnInit {

  socials : Social [];
  selectedSocial ?: Social;
  pageCount : number;
  currentPage: number = 1;
  pageSize : number = 10;
  isLoading : boolean = true;

  constructor(private socialService : SocialService) { }

  ngOnInit(): void {
    this.retriveAllSocials(this.currentPage,this.pageSize);
  }

  retriveAllSocials = (currentPage: number, pageSize: number)=>{
    this.socialService.getAllSocial(currentPage,pageSize).subscribe(data=>{
      this.pageCount = data.pageCount;
      this.socials=data.list;
      this.isLoading = false;
    });
  }

  onDeleteSocial = (social : Social)=>{
    this.socialService.deleteSocial(social.socialId).subscribe(data=>{
      this.currentPage = 1;
      this.retriveAllSocials(this.currentPage, this.pageSize);
      this.selectedSocial = undefined;
    });
  }

  onPageSelection = (pageNumber: number)=>{
    if(this.currentPage!=pageNumber){
      this.currentPage = pageNumber;
      this.isLoading = true;
      this.retriveAllSocials(this.currentPage, this.pageSize);
    }
  }

}
