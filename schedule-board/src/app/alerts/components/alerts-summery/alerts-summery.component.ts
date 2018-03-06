import { Component, OnInit } from '@angular/core';
import { AlertsService } from "app/alerts/services/alerts.service";
import { Alert } from "app/alerts/models/alert";

@Component({
  selector: 'alerts-summery',
  template:
  `<div>
      <alert *ngFor="let alert of alertsService.getAlerts();" [ngClass]="alert.type" [alert]="alert" 
             (timeout)="removeAlert($event)"  (click)="removeAlert(alert)" ></alert>
  </div>`,
  styleUrls: ['./alerts-summery.component.css']
})
export class AlertsSummeryComponent implements OnInit {

  constructor(public alertsService:AlertsService) { }

  ngOnInit() {
  }

  removeAlert (a:Alert) {
    this.alertsService.remove(a);
  }

}
