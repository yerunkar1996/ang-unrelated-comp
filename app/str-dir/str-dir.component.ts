import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-str-dir',
  templateUrl: './str-dir.component.html',
  styleUrls: ['./str-dir.component.css']
})
export class StrDirComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

console.log(this.students[0][0])
  }
 
students = ['Aishwarya',"Poonam","Priyanka",
"Reshma","Sayli","Kajol"]

newStd:any;
onAddStu()
{
  this.students.push(this.newStd)
}

// student task
stname:any;
mt:any;
eng:any;
sci:any;
pass_st= new Array;
fail_st=new Array;
onAddStudent()
{
  const st = {name:this.stname,maths:this.mt,science:this.sci,english:this.eng}

  if(this.mt>35 && this.eng>35 && this.sci>35 )
  {
    this.pass_st.push(st)
  }
  else
  {
    this.fail_st.push(st)
  }
}

ar = ['abc','ddef','hig']
ar2 = [
  {prid:1,prname:'Icecream',prcat:"frozen"},
  {prid:2,prname:'Kulfi',prcat:"frozen"},
  {prid:3,prname:'Milkk',prcat:"Dairy"},
  {prid:4,prname:'Curd',prcat:"Dairy"},
  {prid:5,prname:'Yakut',prcat:"Dairy"},
  {prid:6,prname:'Cake',prcat:"bake"},
  {prid:7,prname:'Pastry',prcat:"bake"},
  {prid:8,prname:'Candies',prcat:"bake"},
  {prid:9,prname:'Franky',prcat:"snacks"},
  {prid:10,prname:'Shawrma',prcat:"snacks"}
]

ngIf_cond=true;
ngIf_marks=28;
data12=''.toLowerCase();
}

