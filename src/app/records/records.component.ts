import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Record } from '../models/Record';
@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit { 
records = [];
errors = [];
record = {
	temp:null,
	humidity:null,
	co2:null
};
   constructor(private dataService: DataService) {
  	

   }

  ngOnInit() {
  	this.getRecords();
  }


  getRecords(){
  	this.dataService.getRecords().subscribe(data=>{
  		this.records = data;
  	},err=>{
      console.log(err);
    });
  }

  postRecord(record){
    this.errors = [];
  	this.records.push(
       {
        temp:record.temp,
        humidity:record.humidity,
        co2:record.co2
      }
        );
  
  	this.dataService.postRecord(record).subscribe
    (
     data=>{
       console.log("Correcto!");
  	       },
     err =>{
      console.log(err.error);
      this.errors = err.error;
      this.getRecords();
          }
    );

    this.record.co2 = null;
    this.record.humidity = null;
    this.record.temp = null; 
  }


  deleteRecord(id,x){
    this.records.splice(x, 1);
    this.dataService.deleteRecord(id).subscribe(d=>{
      console.log(d);
          },err=>{
      console.log(err);
      this.getRecords();
    });
  }
}
