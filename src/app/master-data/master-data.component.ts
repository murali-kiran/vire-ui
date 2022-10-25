import { MasterService } from './../../service/master.service';
import { Component, Input, OnInit } from '@angular/core';
import { Master } from 'src/model/models';

@Component({
  selector: 'app-master-data',
  templateUrl: './master-data.component.html',
  styleUrls: ['./master-data.component.css']
})
export class MasterDataComponent implements OnInit {

  masterDataMap : Map<string,Master[]>;

  constructor(private masterService:MasterService) { }

  ngOnInit(): void {
    this.retriveAllMasterData();
  }

  retriveAllMasterData = () => {
    this.masterService.getAllMasterData().subscribe(data=>{
      this.masterDataMap = data;
    });
  }

}
