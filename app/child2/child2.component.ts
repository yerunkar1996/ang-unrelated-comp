import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(private tran:TransferService,
    private router: Router) { }

  ngOnInit(): void {

    this.shwData()
    this.shwmdbData()

  }
  local_emp_database:any;
  local_emp_mdb:any;

  // shwData()
  // {
  //   this.local_emp_database = this.tran.onGetData();
  // }
  shwData()
  {
    this.tran.onGetNodeData().subscribe(
      (nodedata)=>{this.local_emp_database = nodedata}
    )
  }
  shwmdbData()
  {
    this.tran.onGetmdbData().subscribe(
      (nodedata)=>{this.local_emp_mdb = nodedata}
    )
  }
  onRou(n:any)
  {
    this.router.navigate(['/empdetails',n])
  }
  onAddEmpRou()
  {
    this.router.navigate(['/child1'])
  }

}
