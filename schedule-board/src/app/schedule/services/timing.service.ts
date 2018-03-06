import { Injectable } from '@angular/core';
import { Time } from "app/schedule/models/time";

@Injectable()
export class TimingService {

  public startTime: number;
  public endTime: number;
  public tick: number;
  public workingTime: Time[];

  constructor() {
    this.workingTime = new Array();
  }

  public setWorkingTime(startTime: number, endTime: number, tick: number): void {

    for (let i = startTime; i <= endTime - 1; i++) {

      this.workingTime.push(new Time(i, 0)); // set the hour

      for (let j = tick; j < 60; j += tick) {
        this.workingTime.push(new Time(i, j)); // set hour minuts
      }

    }

    this.workingTime.push(new Time(endTime, 0)); // set the last hour
  }

  public getWorkingTime() {
    return this.workingTime;
  }

}
