import { Feed } from './../../model/models';
import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/service/feed.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {

  feeds : Feed [];
  selectedChannel ?: Feed;
  pageCount : number;
  currentPage: number = 1;
  pageSize : number = 3;

  constructor(private feedService : FeedService) { }

  ngOnInit(): void {
    this.retriveAllFeeds();
  }

  retriveAllFeeds = ()=>{
    this.feedService.getAllFeeds().subscribe(data=>{
      this.pageCount = data.pageCount;
      this.feeds=data.list;
    });
  }

}
