
export class Time {
    public hour: number;
    public minutes: number;

    constructor(hour: number, minuts: number) {
        this.hour = hour;
        this.minutes = minuts;
    }
    
    toString() {
        return `${this.hour} : ${this.minutes == 0 ? "00" : this.minutes}`;
    }
}