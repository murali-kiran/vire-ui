import { Social } from './../../../model/models';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-social-item',
  templateUrl: './social-item.component.html',
  styleUrls: ['./social-item.component.css']
})
export class SocialItemComponent implements OnInit {

  @Input('socialObj') public social : Social;
  @Output("deleteSocial") deleteSocialFun: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteSocial(): void {
    this.deleteSocialFun.emit();
  }

}
