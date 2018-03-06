
export class Alert {
    public title:string;
    public message:string;
    public delay:number;
    public type:string;

    constructor(title:string,message:string,delay:number,type:string = "") {
       this.title = title;
       this.message = message;
       this.delay = delay;
       this.type = type;
    }
}