import { Directive, HostListener, Output, EventEmitter, ElementRef } from '@angular/core';
import { Appointment } from "app/schedule/models/appointment";

@Directive({
  selector: '[dropZone]'
})
export class DropZoneDirective {

  @Output("droped")  droped = new EventEmitter(); 
  @HostListener("dragover", ['$event']) ondragover(e: Event) {
    e.preventDefault()
  }
  
   @HostListener("drop", ['$event']) ondrop(e:DragEvent) {
    e.preventDefault();
    let data = JSON.parse(e.dataTransfer.getData("text"));
    data.event =  e;
    this.droped.emit(data);
  }
  
  constructor(private elm: ElementRef) { }

}
