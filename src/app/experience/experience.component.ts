import { Experience } from './../../model/models';
import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/service/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences : Experience [];
  selectedExperience ?: Experience;
  pageCount : number;
  currentPage: number = 1;
  pageSize : number = 10;

  constructor(private experienceService : ExperienceService) { }

  ngOnInit(): void {
    this.retriveAllExperiences(this.currentPage, this.pageSize);
  }

  retriveAllExperiences = (currentPage: number, pageSize: number)=>{
    this.experienceService.getAllExperiences(currentPage,pageSize).subscribe(data=>{
      this.pageCount = data.pageCount;
      this.experiences=data.list;
    });
  }

  onDeleteExperience = (experience : Experience)=>{
    this.experienceService.deleteExperience(experience.experienceId).subscribe(data=>{
      this.currentPage = 1;
      this.retriveAllExperiences(this.currentPage, this.pageSize);
      this.selectedExperience = undefined;
    });
  }

  onPageSelection = (pageNumber: number)=>{
    if(this.currentPage!=pageNumber){
      this.currentPage = pageNumber;
      this.retriveAllExperiences(this.currentPage, this.pageSize);
    }
  }

}
