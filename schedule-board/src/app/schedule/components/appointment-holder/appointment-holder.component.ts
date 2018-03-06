import { Component, OnInit, Input } from '@angular/core';
import { Time } from "app/schedule/models/time";
import { Employee } from "app/schedule/models/employee";

@Component({
  selector: 'appointment-holder',
  template:"&nbsp;"
})
export class AppointmentHolderComponent implements OnInit {
  @Input() time:Time;
  @Input() employee:Employee;
  constructor() { }

  ngOnInit() {
  }

}
