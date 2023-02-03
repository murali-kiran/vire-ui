import { AdminMessage } from './../../../model/models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AdminmessageService } from 'src/service/adminmessage.service';

@Component({
  selector: 'app-admin-message-item',
  templateUrl: './admin-message-item.component.html',
  styleUrls: ['./admin-message-item.component.css']
})
export class AdminMessageItemComponent implements OnInit {

  @Input('msgObj') public  adminMessage: AdminMessage;
  @Output("deleteAdminMessage") deleteAdminMessageFun: EventEmitter<any> = new EventEmitter();
  @Output("resendAdminMessage") resendAdminMessageFun: EventEmitter<any> = new EventEmitter();
  @Output("editAdminMessage")   editAdminMessageFun: EventEmitter<any> = new EventEmitter();

  isEditMsgBtn : boolean = true;
  adminMsg?: string = '';

  constructor(public adminMessageService: AdminmessageService) { 
  }

  ngOnInit(): void {
    this.adminMsg = this.adminMessage.message;
  }

  onDeleteAdminMessage(): void {
    this.deleteAdminMessageFun.emit(this.adminMessage.adminMessageId);
  }

  onResendAdminMessage(): void {
    this.resendAdminMessageFun.emit(this.adminMessage);
  }

  onEditAdminMessage(): void {
    this.adminMessage.message = this.adminMsg;
    this.editAdminMessageFun.emit(this.adminMessage);
    this.isEditMsgBtn = true;
  }

  toggleEditMessage=()=>{
    this.isEditMsgBtn = !this.isEditMsgBtn;
  }

}
