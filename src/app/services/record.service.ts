import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Record } from '../models/Record';
@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http: HttpClient) { 

  }

  getRecords(){//
  	return this.http.get('/api/records');
  }

  postRecord(record){//crear
  	return this.http.post('/api/rec',record);
  }

  putRecord(id,record){//modificar
  	return this.http.put('/api/record/'+id,record);
  }

  deleteRecord(id){//eliminar
  	return this.http.delete('/api/record/'+id);
  }

  getRecord(id){
  	return this.http.get('/api/record/'+id);
  }
}
