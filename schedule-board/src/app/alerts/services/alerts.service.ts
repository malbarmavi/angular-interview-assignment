import { Injectable } from '@angular/core';
import { Alert } from "app/alerts/models/alert";

@Injectable()
export class AlertsService {

  private alerts: Alert[] = new Array();

  constructor() { }

  public log(title: string, message: string, type: string = "", delay: number = 3000) {

    // add dynamic delay base on alerts length so last one longest delay amount
    delay += this.alerts.length * 500;

    // Add at array first index so the new alert show on top of the old alerts 
    this.alerts.unshift(new Alert(title, message, delay, type));
  }


  public success(title: string, message: string) {
    this.log(title, message, "success");
  }

  public error(title: string, message: string) {
    this.log(title, message, "error");
  }

  public remove(value: Alert) {
    this.alerts.splice(this.alerts.indexOf(value), 1);
  }

  public getAlerts() {
    return this.alerts;
  }
}
