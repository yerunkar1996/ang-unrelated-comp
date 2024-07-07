import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private api:ApiService,
    private acr:ActivatedRoute) { }

  ngOnInit(): void {
    this.getId()
    this.getUserdata()
  }

  curr_user_id:any;
  user_data:any;
  getId()
  {
    this.acr.params.subscribe(
      (abc)=>{this.curr_user_id = abc['id']}
    )
  }

  getUserdata()
  {
    this.api.apiData().subscribe(
      (d)=>{this.user_data=d}
    )
  }

}
