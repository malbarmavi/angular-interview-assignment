import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Alert } from "app/alerts/models/alert";

@Component({
  selector: 'alert',
  template: 
  `<div [ngClass]="{'close':close,'success':alert.type == 'success','error' :alert.type == 'error' }"> 
      <span class="title"> {{alert.title}} </span>  
      <span class="message"> {{alert.message }}</span> 
  </div>`,
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() alert: Alert;
  @Output("timeout") timeout = new EventEmitter();
  public close =false;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      setTimeout(()=> {
        this.timeout.emit(this.alert); // emit timeout event
      }, 600);
      this.close =true; // active close class
    }, this.alert.delay-600); 
  }

}
