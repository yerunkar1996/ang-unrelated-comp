import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {

  constructor(private api:ApiService,
    private acr:ActivatedRoute) { }

  ngOnInit(): void {
  }
data_default={name:'Neelam',em:'nmg@gmail.com',add:'Mumbai mmmmmmm',ph:8928232000}
  
curr_user_id:any;
  user_data:any;
  current_user:any;
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



regForm = new FormGroup({
    stname:new FormControl(this.data_default.name,Validators.required),
    stemail:new FormControl(this.data_default.em,[Validators.required,Validators.email]),
    stadd:new FormControl(this.data_default.add,[Validators.required,Validators.minLength(10)]),
    ph:new FormControl(this.data_default.ph,[Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ])
  })

  onReg()
  {
    console.log(this.regForm)
  }
  get err(){return this.regForm.controls}

 

}
