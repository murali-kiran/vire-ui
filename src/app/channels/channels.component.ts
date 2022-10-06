import { ChannelService } from './../../service/channel.service';
import { Channel } from './../../model/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  channels : Channel [];
  selectedChannel ?: Channel;
  pageCount : number;
  currentPage: number = 1;
  pageSize : number = 10;

  constructor(private channelService:ChannelService) { }

  ngOnInit(): void {
    this.retriveAllCommunties(this.currentPage,this.pageSize);
  }

  retriveAllCommunties = (currentPage: number, pageSize: number)=>{
    this.channelService.getAllChannels(currentPage,pageSize).subscribe(data=>{
      this.pageCount = data.pageCount;
      this.channels=data.list;
    });
  }

  onItemChange = (channel : Channel) => {
    this.selectedChannel = channel;
    console.log(channel);
  }

  onDeleteChannel = (channel : Channel)=>{

    this.channelService.deleteChannel(channel.channelId).subscribe(data=>{
      this.currentPage = 1;
      this.retriveAllCommunties(this.currentPage,this.pageSize);
      this.selectedChannel = undefined;
    });

  }

  onPageSelection = (pageNumber: number)=>{
    if(this.currentPage!=pageNumber){
      this.currentPage = pageNumber;
      this.retriveAllCommunties(this.currentPage, this.pageSize);
    }
  }


}
