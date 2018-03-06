
import { Time } from "app/schedule/models/time";
import { IPosition } from "app/schedule/models/postion";

export class Appointment implements IPosition {
    public top:number;
    public left:number
    constructor(public id:number,public startTime:Time,public endTime:Time,top:number) {
        this.top = top;
    }

}