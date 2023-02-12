import { AdminmessageService } from './../../../service/adminmessage.service';
import { Social, AdminMessage } from './../../../model/models';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SocialService } from 'src/service/social.service';

@Component({
  selector: 'app-social-item',
  templateUrl: './social-item.component.html',
  styleUrls: ['./social-item.component.css']
})
export class SocialItemComponent implements OnInit {

  @Input('socialObj') public social : Social;
  @Output("deleteSocial") deleteSocialFun: EventEmitter<any> = new EventEmitter();
  isAdminMsgBtn : boolean = true;
  adminMsg: string = '';

  constructor(public socialService : SocialService,private adminmessageService:AdminmessageService) { }

  ngOnInit(): void {
  }

  onDeleteSocial(): void {
    this.deleteSocialFun.emit();
  }

  toggleAdminMsg = ()=>{
    this.adminMsg = '';
    this.isAdminMsgBtn = !this.isAdminMsgBtn;
  }

  sendAdminMessage = (socialId :string)=>{
    var adminMsg:AdminMessage = {
      messageType: "social",
      message : this.adminMsg,
      sendTo: socialId
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
