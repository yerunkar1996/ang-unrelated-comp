import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sinup',
  templateUrl: './sinup.component.html',
  styleUrls: ['./sinup.component.css']
})
export class SinupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
user_name :any;
  onSinup(data:any)
  {
    this.user_name = data.value;
    if (this.user_name != 'Neelam')
    {
      console.log(this.user_name)
    }
  }
// function to add num
num1:any;
num2=0;
n1_n2_add:any;
onNumAdd(n1:any,n2:any)
{
  this.num1 = Number(n1.value)
  this.num2 = Number(n2.value)
  this.n1_n2_add = this.num1+this.num2;
}
// func for user auth
un:any;
pw:any;
msg:any;
onLog(u:any,p:any)
{
  this.un = u.value;
  this.pw= p.value;
  if (this.un != "nmgLog")
  {
this.msg="Enter correct Username"
  }
  else if ( this.pw != "n123")
  {
this.msg = "enter Correct Password"
  }
  else
  {
this.msg =" Login Successfull"
  }

}
// two way data binding
coursename:any;
qty=0;
amt=0;

dt =new  Date;


}
