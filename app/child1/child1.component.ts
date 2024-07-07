import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private trans:TransferService) { }

  ngOnInit(): void {
  }

  
  saveEmp(i:NgForm)
  {
    console.log(i.value);
    this.trans.onNewData(i.value);
    this.trans.onADDmdbData(i.value).subscribe(
      (mdbmsg)=>{console.log(mdbmsg)}
    )

  }


}
