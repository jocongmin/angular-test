import { Component, OnInit } from '@angular/core';
import {MytestchildComponent} from './mytestchild.component';
import { ActivatedRoute, Params,Router }   from '@angular/router';
import { Location }   from '@angular/common';

@Component({
  selector: 'mytest',
  templateUrl: './mytest.component.html',
  styleUrls: ['./mytest.component.scss'],
  providers:[MytestchildComponent]
})
export class MytestComponent implements OnInit {
  tochild:number;
  constructor(private route: ActivatedRoute,
  private location: Location,private router:Router) {
    // Do stuff
    this.tochild=465465465;//i success get father,s data
  }
  getChildEvent($v){
  	alert($v);  //suc get child emit event and the event emit one father event ,by this,father can used child data 
  }
  ngOnInit() {
    console.log('Hello mytest');
    console.log(this.route.params)
    this.route.params.forEach((params: Params) => {
	    console.log(params);
	  });
  }
  goback(): void {
	  this.location.back();
	}
	gotoDetail(): void {
	  let link = ['/mytest',6];
	  this.router.navigate(link);
	}
}
