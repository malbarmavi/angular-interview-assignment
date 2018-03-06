import { Injectable, OnInit } from '@angular/core';

import { Appointment } from "../models/appointment";
import { Time } from "app/schedule/models/time";
import { Employee } from "app/schedule/models/employee";

@Injectable()
export class ScheduleService implements OnInit {

  private data: Employee[] = new Array();

  constructor() {
    this.setData();
  }

  public setData() {

    let muh: Employee = new Employee();
    muh.id = 1;
    muh.Name = "Muhd";

    let zain: Employee = new Employee();
    zain.id = 2;
    zain.Name = "Zain";

    let Nour: Employee = new Employee();
    Nour.id = 3;
    Nour.Name = "Nour";

    let wael: Employee = new Employee();
    wael.id = 4;
    wael.Name = "Wael";


    let momen: Employee = new Employee();
    momen.id = 5;
    momen.Name = "Momen";

    let Amean: Employee = new Employee();
    Amean.id = 6;
    Amean.Name = "Amean";

    this.data.push(muh);
    this.data.push(zain);
    this.data.push(Nour);
    this.data.push(wael);
    this.data.push(momen);
    this.data.push(Amean);

  }

  public addAppointment(employee: Employee, startTime: Time, endTime: Time, top: number): void {
    let employeeIndex = this.data.findIndex(e => e.id == employee.id);
    //  Gen random Id for appointments ,consider use array of ids
    let id =Math.trunc(Math.random() * 100)+this.data[employeeIndex].Apppiments.length; 
    this.data[employeeIndex].Apppiments.push(new Appointment(id, startTime, endTime, top));
  }

  public removeAppointment(employee: Employee, appointment: Appointment): void {
    // employee ids base on 1 index and not updateable or removable  
    let appIndex = this.data[(employee.id - 1)].Apppiments.findIndex(a => a.id == appointment.id)
    this.data[(employee.id - 1)].Apppiments.splice(appIndex, 1);
  }

  public getData() {
    return this.data;
  }

  ngOnInit() {

  }
}
