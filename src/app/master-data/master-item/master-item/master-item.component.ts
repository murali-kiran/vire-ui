import { MasterService } from './../../../../service/master.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Master } from 'src/model/models';

@Component({
  selector: 'app-master-item',
  templateUrl: './master-item.component.html',
  styleUrls: ['./master-item.component.css']
})
export class MasterItemComponent implements OnInit {

  @Input() masterType: string;
  @Input() masterValues: Master[];
  @Output("retrivemasterData") retrivemasterDataFun: EventEmitter<any> = new EventEmitter();

  selectedMasterValue : string="";
  selectedMasterID : number;

  newMasterValue: string;
  updateMasterValue: string;

  constructor(public masterService: MasterService) { }

  ngOnInit(): void {
  }

  onChangeMasterValue(event:any){
    this.updateMasterValue = event.target.options[event.target.options.selectedIndex].text;
    this.selectedMasterID = event.target.value
  }

  deleteMaster(){
    if(this.selectedMasterID) {
      this.masterService.deleteMaster(this.selectedMasterID).subscribe((event: any) => {
        this.retrivemasterDataFun.emit();
        alert("Data deleted successfully");
      }, error => {
        alert(error);
      });
    }
  }

  updateMaster(){
    if(this.selectedMasterID){

      const foundMasterData = this.masterValues.find(master => master.masterValue.toLowerCase() == this.updateMasterValue.toLowerCase());

      if(!foundMasterData){

        let master = new Master();
        master.masterId = this.selectedMasterID;
        master.masterType  = this.masterType;
        master.masterValue = this.updateMasterValue;
        this.masterService.updateMaster(master).subscribe((master:Master)=>{
          this.updateMasterValue = "";
          this.retrivemasterDataFun.emit();
          alert( "Data updated successfully");
        }, error => {
          alert(error);
        });

      }else{
        alert("Same value already exists");
      }
    }
  }

  createMaster() {

    let master = new Master();
    master.masterType  = this.masterType;
    master.masterValue = this.newMasterValue;

    const foundMasterData = this.masterValues.find(master => master.masterValue.toLowerCase() == this.newMasterValue.toLowerCase());

    if(!foundMasterData) {

     this.masterService.createMaster(master).subscribe((event: Master) => {
      this.newMasterValue = '';
      this.retrivemasterDataFun.emit();
      alert("Data save successfully");
      }, error => {
        alert(error);
      });

    }else{
      alert("Same value already exists");
    }

  }

}
