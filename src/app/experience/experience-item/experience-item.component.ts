import { AdminmessageService } from './../../../service/adminmessage.service';
import { ExperienceService } from 'src/service/experience.service';
import { Experience, AdminMessage } from './../../../model/models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {

  @Input('experienceObj') public experience : Experience;
  @Output("deleteExperience") deleteExperienceFun: EventEmitter<any> = new EventEmitter();
  isAdminMsgBtn : boolean = true;
  adminMsg: string = '';

  constructor(public experienceService:ExperienceService,private adminmessageService:AdminmessageService
    ) { }

  ngOnInit(): void {
  }

  onDeleteExperience(): void {
    this.deleteExperienceFun.emit();
  }

  toggleAdminMsg = ()=>{
    this.adminMsg = '';
    this.isAdminMsgBtn = !this.isAdminMsgBtn;
  }

  sendAdminMessage = (experienceId:string)=>{
    var adminMsg:AdminMessage = {
      messageType: "Experiences",
      message : this.adminMsg,
      sendTo: experienceId
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
