import { Experience } from './../../../model/models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {

  @Input('experienceObj') public experience : Experience;
  @Output("deleteExperience") deleteExperienceFun: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteExperience(): void {
    this.deleteExperienceFun.emit();
  }

  
}
