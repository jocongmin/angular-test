import { Output,Input,Component, OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'mytestchild',
  templateUrl: './mytestchild.component.html',
  styleUrls: ['./mytestchild.component.scss']
})
export class MytestchildComponent implements OnInit {
  @Input() getdata:number;
  @Output() tofatherEvent: any = new EventEmitter(); //you need this way and you can emit event to father component
  tofatherData:any;
  constructor() {
    // Do stuff
    this.tofatherData='tofatherData';
  }
  testclick(){
  	alert(this.getdata);
  	this.tofatherEvent.emit(this.tofatherData);//emit one child event and this event will emit one data to father
  }
  ngOnInit() {
    console.log('Hello mytest');
  }

}
