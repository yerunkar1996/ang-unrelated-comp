import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 news=['asdf','qwer','yuiop','fghjk','zxcvb']
 dept_saved:any;
 dep_hod:any;
 onsave(i:any)
 {
  this.dept_saved=i.value;
 }
}
