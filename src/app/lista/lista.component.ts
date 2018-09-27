import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Record } from '../models/Record';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
	@Input() records:Record[];
	@Output() shoRecord = new EventEmitter();
	@Output() delRecord = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  show_record(record,index){
  	this.shoRecord.emit(
  	{
  		record:record,
  		index:index
  	});
  }

  delete_record(id,index){
  	this.delRecord.emit({id:id,index:index});
  }
}
