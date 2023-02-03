import { AdminMessage } from './../../model/models';
import { Component, OnInit } from '@angular/core';
import { AdminmessageService } from 'src/service/adminmessage.service';

@Component({
  selector: 'app-admin-message',
  templateUrl: './admin-message.component.html',
  styleUrls: ['./admin-message.component.css','./../../assets/css/spinner.css']
})
export class AdminMessageComponent implements OnInit {

  adminMessages : AdminMessage [];
  selectedMsg ?: AdminMessage;
  pageCount : number;
  currentPage: number = 1;
  pageSize : number = 10;
  isLoading : boolean = true;

  constructor(private adminMessageService : AdminmessageService) { }

  ngOnInit(): void {
    this.retriveAllAdminMessages(this.currentPage,this.pageCount);
  }

  retriveAllAdminMessages = (currentPage: number, pageSize : number)=>{
    this.adminMessageService.getAllAdminMessages(this.currentPage,this.pageSize).subscribe(data=>{
      this.adminMessages=data.list;
      this.pageCount = data.pageCount;
      this.isLoading = false;

    });
  }

  onPageSelection = (pageNumber: number)=>{
    if(this.currentPage!=pageNumber){
      this.currentPage = pageNumber;
      this.isLoading = true;
      this.retriveAllAdminMessages(this.currentPage, this.pageSize);
    }
  }

  onDeleteAdminMessage = (adminMessage : AdminMessage,idx : number)=>{
    this.adminMessageService.deleteAdminMessage(adminMessage.adminMessageId).subscribe(data=>{
      this.currentPage = 1;
      this.retriveAllAdminMessages(this.currentPage, this.pageSize);
      alert("Admin Message deleted successfully");      
    });
  }

  onResendAdminMessage = (adminMessage : AdminMessage)=>{
    this.adminMessageService.sendAdminMessage(adminMessage).subscribe(data=>{
      alert("Admin Message resended successfully");       
    },
    error=>{
      console.log(error);     
    });
  }

  onEditAdminMessage = (adminMessage : AdminMessage)=>{
    //adminMessage.message = this.adminm
    this.adminMessageService.editAdminMessage(adminMessage).subscribe(data=>{
      alert("Admin Message edited successfully");
    },
    error=>{
      console.log(error);      
    });
  }

}
