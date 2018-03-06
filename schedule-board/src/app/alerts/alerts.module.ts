import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertsSummeryComponent } from './components/alerts-summery/alerts-summery.component';
import { AlertComponent } from './components/alert/alert.component';
import { AlertsService } from "../alerts/services/alerts.service";

@NgModule({
    declarations: [AlertsSummeryComponent, AlertComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    exports:[AlertsSummeryComponent],
    providers: [AlertsService],
})
export class AlertsModule { }

export { AlertsService } from "../alerts/services/alerts.service";
