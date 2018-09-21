import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Record } from './models/Record';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  		console.log("serives is working!");
  		this.getRecords();
   }

   getRecords(){
     	return this.http.get<Record[]>('/api/records');
   }

   postRecord(record){
   		return this.http.post<Record[]>('/api/rec',{
   			temp:record.temp,
   			humidity:record.humidity,
   			co2:record.co2
   		});
   }

   deleteRecord(id){
     return this.http.delete('/api/record/'+id);
   }

}
