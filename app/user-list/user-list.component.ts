import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private api:ApiService,
    private route:Router) { }

  ngOnInit(): void {
    this.getApiData()
  }

  user_data:any;
  getApiData()
  {
   this.api.apiData().subscribe(
     (d)=>{console.log(d)
       this.user_data=d}
   )
  }


  onRou(id:any)
  {
    this.route.navigate(["/userdetails",id])
  }
  onEdit(id:any)
  {
    this.route.navigate(["/reg",id])
  }
}
