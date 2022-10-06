import { Feed } from './../../../model/models';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FeedService } from 'src/service/feed.service';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.css']
})
export class FeedItemComponent implements OnInit {

  @Input('feedObj') public feed : Feed;
  @Output("deleteFeed") deleteFeedFun: EventEmitter<any> = new EventEmitter();

  constructor(public feedService : FeedService) { }

  ngOnInit(): void {
  }


  onDeleteFeed(): void {
    this.deleteFeedFun.emit();
  }

}
