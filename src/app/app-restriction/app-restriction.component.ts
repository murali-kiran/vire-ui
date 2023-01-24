import { AppRestriction } from './../../model/models';
import { Component, OnInit } from '@angular/core';
import { ApprestrictionService } from 'src/service/apprestriction.service';

@Component({
  selector: 'app-app-restriction',
  templateUrl: './app-restriction.component.html',
  styleUrls: ['./app-restriction.component.css']
})
export class AppRestrictionComponent implements OnInit {

  appRestriction: AppRestriction = {
    interestsSelectionLimit : 0,
    creatingCommunitiesLimit : 0
  };
  error:string;

  constructor(private apprestrictionService: ApprestrictionService) { }

  ngOnInit(): void {
    this.apprestrictionService.getAppRestriction().subscribe( {
      next: (appRestriction) => { 
        this.appRestriction = appRestriction; 
        this.error = '';
      },
      error: (error) => { 
        this.error = error.statusText ? error.statusText : "Some failure happened please try again!";   
      }
    });
  }

  update = ()=>{
    this.apprestrictionService.updateAppRestriction(this.appRestriction).subscribe({
      next: (appRestriction) => { 
        this.appRestriction = appRestriction; 
        this.error = '';
        alert("Updated Successfully");
      },
      error: (error) => { 
        this.error = error.statusText ? error.statusText : "Some failure happened please try again!"; 
      }
    });
  }

}
