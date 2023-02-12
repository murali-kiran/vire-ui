import { AdminmessageService } from './../../../service/adminmessage.service';
import { Feed, AdminMessage } from './../../../model/models';
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

  isAdminMsgBtn : boolean = true;
  adminMsg: string = '';

  constructor(public feedService : FeedService,private adminmessageService:AdminmessageService) { }

  ngOnInit(): void {
  }


  onDeleteFeed(): void {
    this.deleteFeedFun.emit();
  }

  toggleAdminMsg = ()=>{
    this.adminMsg = '';
    this.isAdminMsgBtn = !this.isAdminMsgBtn;
  }

  sendAdminMessage = (feedId :string )=>{
    var adminMsg:AdminMessage = {
      messageType: "feeds",
      message : this.adminMsg,
      sendTo: feedId
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
