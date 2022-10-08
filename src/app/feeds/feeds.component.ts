import { Feed } from './../../model/models';
import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/service/feed.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css','./../../assets/css/spinner.css']
})
export class FeedsComponent implements OnInit {

  feeds : Feed [];
  selectedChannel ?: Feed;
  pageCount : number;
  currentPage: number = 1;
  pageSize : number = 10;
  isLoading : boolean = true;


  constructor(private feedService : FeedService) { }

  ngOnInit(): void {
    this.retriveAllFeeds();
  }

  retriveAllFeeds = ()=>{
    this.feedService.getAllFeeds().subscribe(data=>{
      //this.pageCount = data.pageCount;
      this.feeds=data;
      this.isLoading = false;
    });
  }

  onDeleteFeed = (feed : Feed,idx : number)=>{
    this.feedService.deleteFeed(feed.feedId).subscribe(data=>{
      //this.currentPage = 1;
      //this.retriveAllExperiences(this.currentPage, this.pageSize);
      //this.selectedExperience = undefined;
      if (idx !== -1) {
        this.feeds.splice(idx, 1);
      } 
       
    });
  }

}
