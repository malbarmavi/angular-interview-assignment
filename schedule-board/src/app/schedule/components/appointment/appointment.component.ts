import { Component, OnInit, Input } from '@angular/core';
import { Time } from "app/schedule/models/time";
import  {Employee} from "../../models/employee";

@Component({
  selector: 'appointment',
  template: "<span>{{getTime()}}</span>",
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  @Input() startTime: Time;
  @Input() endTime: Time;
  @Input() employee: Employee;

  constructor() { }

  ngOnInit() {
  }

  getTime(): string {
    return `${this.startTime.toString()} - ${this.endTime.toString()}`;
  }

}
