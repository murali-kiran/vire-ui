import { AdminmessageService } from './../../service/adminmessage.service';
import { ChannelService } from './../../service/channel.service';
import { Channel, AdminMessage } from './../../model/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css','./../../assets/css/spinner.css']
})
export class ChannelsComponent implements OnInit {

  channels : Channel [];
  selectedChannel ?: Channel;
  pageCount : number;
  currentPage: number = 1;
  pageSize : number = 10;
  isLoading : boolean = true;
  isAdminMsgBtn : boolean = true;
  adminMsg: string = '';

  constructor(private channelService:ChannelService,private adminmessageService:AdminmessageService) { }

  ngOnInit(): void {
    this.retriveAllCommunties(this.currentPage,this.pageSize);
  }

  retriveAllCommunties = (currentPage: number, pageSize: number)=>{
    this.channelService.getAllChannels(currentPage,pageSize).subscribe(data=>{
      this.pageCount = data.pageCount;
      this.channels=data.list;
      this.isLoading = false;
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
      this.isLoading = true;
      this.retriveAllCommunties(this.currentPage, this.pageSize);
    }
  }

  
  toggleAdminMsg = ()=>{
    this.adminMsg = '';
    this.isAdminMsgBtn = !this.isAdminMsgBtn;
  }

  sendAdminMessage = (channelId: string)=>{
    var adminMsg:AdminMessage = {
      messageType: "channels",
      message : this.adminMsg,
      sendTo: channelId
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
