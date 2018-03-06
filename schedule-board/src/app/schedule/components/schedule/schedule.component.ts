import { Component, OnInit } from '@angular/core';
import { ScheduleService } from "app/schedule/services/schedule.service";
import { AlertsService } from "app/alerts/alerts.module";
import { TimingService } from "app/schedule/services/timing.service";
import { Time } from "app/schedule/models/time";
import { Employee } from "app/schedule/models/employee";
import { Appointment } from "app/schedule/models/appointment";

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  public workingTime: Time[];

  constructor(
    public scheduleService: ScheduleService,
    public alerts: AlertsService,
    public timing: TimingService
  ) {
    this.workingTime = new Array();
  }

  ngOnInit() {
    this.timing.setWorkingTime(10, 14, 30);
    this.workingTime = this.timing.getWorkingTime();
  }

  addAppointment(e: MouseEvent, time: Time, employee: Employee) { // TODO add end time 
    let elm = e.target as HTMLElement;
    let endTime = new Time(time.hour, time.minutes + 30 - 1);
    this.scheduleService.addAppointment(employee, time, endTime, elm.offsetTop);
    this.alerts.success("Add Appointment", "New appointment has created successfully.")
    
  }

  dropedHandler(data: any, time: Time, employee: Employee) {
    let { employee: srcEmployee, appointment, event } = data;

    if (time.hour == appointment.startTime.hour && time.minutes == appointment.startTime.minutes) {

      if ((event as DragEvent).ctrlKey === false) {
        this.scheduleService.removeAppointment(srcEmployee, appointment);
      }

      let startTime = new Time(appointment.startTime.hour, appointment.startTime.minutes);
      let endTime = new Time(appointment.endTime.hour, appointment.endTime.minutes);

      this.scheduleService.addAppointment(employee, startTime, endTime, event.target.offsetTop);
    } else {
      this.alerts.error("Drop Appointment", "You can't drop event to defferent row.")
    }
  }

  removeApppiment(e: MouseEvent, employee: Employee, appointment: Appointment): void {
    if (e.altKey) {
      this.scheduleService.removeAppointment(employee, appointment);
    }
  }

  showError(e: DragEvent,appointment: Appointment):void {
    let { appointment: srcAppointment } = JSON.parse(e.dataTransfer.getData("text"));
    if (srcAppointment.id != appointment.id) {
      this.alerts.error("Drop Appointment", "You can't drop appointment on top another another appointment.")
    }

    
  }
  showInfo (){
      this.alerts.log("Clone Appointment","Hold ctrl key to clone the appointment.");
      this.alerts.log("Remove Appointment","hold alt key and click to remove the appointment.");
    }

}
