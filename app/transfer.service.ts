import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private http:HttpClient) { }

  database=[
    {eid:'10',contact:"8998899800",ename:'Neelam',dept:'Admin',email:'nmg@gmail.com'},
    {eid:'1',contact:"8998899800",ename:'Tushar',dept:'HR',email:'nmg@gmail.com'},
    {eid:'2',contact:"8998899800",ename:'Ridaan',dept:'HR',email:'nmg@gmail.com'},
    {eid:'3',contact:"8998899800",ename:'Ayan',dept:'Admin',email:'nmg@gmail.com'},
  ];

  onNewData(i:any)
  {
    this.database.push(i);
    console.log(this.database)
  }
  onGetData()
  {
    return this.database;
  }
  onGetNodeData()
  {
    return this.http.get('http://localhost:3000/database_emp');
  }
  onGetmdbData()
  {
    return this.http.get('http://localhost:3000/empMongoDB');
  }
  onADDmdbData(formdata:any)
  {
    return this.http.post('http://localhost:3000/addData',formdata)
  }


}
