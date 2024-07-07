import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

url_json="https://jsonplaceholder.typicode.com/users"

apiData()
{
  return this.http.get(this.url_json)
}
saveData(i:any)
{
  return this.http.post(this.url_json,i)
}


updateData(data:any,id:any)
{
  return this.http.put(`${this.url_json}/${id}`,data)
}
deleteData(id:any)
{
  return this.http.delete(`${this.url_json}/${id}`)
}


}
