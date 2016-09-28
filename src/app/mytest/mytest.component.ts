import { Component, OnInit } from '@angular/core';
import {MytestchildComponent} from './mytestchild.component';

@Component({
  selector: 'mytest',
  templateUrl: './mytest.component.html',
  styleUrls: ['./mytest.component.scss'],
  providers:[MytestchildComponent]
})
export class MytestComponent implements OnInit {
  tochild:number;
  constructor() {
    // Do stuff
    this.tochild=465465465;//i success get father,s data
  }
  getChildEvent($v){
  	alert($v);  //suc get child emit event and the event emit one father event ,by this,father can used child data 
  }
  ngOnInit() {
    console.log('Hello mytest');
  }
}
