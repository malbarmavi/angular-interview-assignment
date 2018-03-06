import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ScheduleComponent } from './components/schedule/schedule.component';
import { AppointmentHolderComponent } from './components/appointment-holder/appointment-holder.component';
import { AppointmentComponent } from './components/appointment/appointment.component';

import { DraggableDirective } from './directives/draggable.directive';

import { ScheduleService } from './services/schedule.service';
import { TimingService } from "../schedule/services/timing.service";

import { AlertsModule } from '../alerts/alerts.module';
import { DropZoneDirective } from './directives/drop-zone.directive';


@NgModule({
    declarations: [
        DraggableDirective,
        ScheduleComponent,
        AppointmentComponent,
        AppointmentHolderComponent,
        DropZoneDirective],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AlertsModule
    ],
    exports: [ScheduleComponent],
    providers: [ScheduleService,TimingService],
})
export class ScheduleModule { }


