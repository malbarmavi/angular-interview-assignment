import { Appointment } from "../models/appointment";

export class Employee {
    public id:number;
    public Name: string;
    public Apppiments: Appointment[] = new Array();
  
}