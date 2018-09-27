import { Component, OnInit } from '@angular/core';
import { Record } from '../models/Record';
import { RecordService} from '../services/record.service';
@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
	records: Record[];//array de objetos
  record: Record;//objeto Record
  error: Array<string>;
  index_record:number;
  show_record: boolean;
  constructor(private recordService:RecordService) {
    this.index_record = 0;
    this.show_record = false;
  	this.records = [
  		{
  			id:1,
  			temp:23,
  			humidity:12,
  			co2:34,
  		
  		}
  	];
    this.record ={
        id:0,
        temp:0,
        humidity:0,
        co2:0,
    }
    this.error = [];
   }

  ngOnInit() {
    this.getRecords();
  }

  getRecords(){
    this.recordService.getRecords().subscribe((d:Record[])=>{
     console.log(d);
     this.records = d;
    },e=>{
      console.log(e);
     

    });
  }

  postRecord(record){
    this.error = [];
   this.recordService.postRecord(record).subscribe((d:Record)=>{
     console.log("publicado");
     this.records.push(d);
   },e=>{
     console.log(e);
     this.error = e.error;
   });
  }

    putRecord(record){
    this.error = [];
   this.recordService.putRecord(record.id,record).subscribe((d:Record)=>{
     console.log("modificado!");
    this.records[this.index_record] = d;
   },e=>{
     console.log(e);
     this.error = e.error;
   });
  }

  showRecord(array){
    this.record =array.record;
    this.show_record = true;
    this.index_record = array.index;
    console.log(array.record.id);
    console.log("index",array.index);
  }

  closeRecord(){
    this.show_record = false;
    this.record = {
      id:0,
      temp:0,
      humidity:0,
      co2:0
    };
    this.error = [];
  }

  deleteRecord(array){
   
var r = confirm("Estas seguro de eliminar "+array.id+"registro?");
if (r == true) {
  this.recordService.deleteRecord(array.id).subscribe(d=>{
    console.log(d);
    this.records.splice(array.index,1);
  },e=>{
     console.log(e);
  });
  
}
  }

}
