import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() {    
  }

  public getDateFFMMMYYYY(timeInMilli?: string): string {

    if(!timeInMilli) return "";

    try{
      const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      var d = new Date(timeInMilli);
      let month = months[d.getMonth()];
  
      return d.getDate()+" "+month+" "+d.getFullYear();
    }catch(e){
      return "";
    }

  }
  
}
