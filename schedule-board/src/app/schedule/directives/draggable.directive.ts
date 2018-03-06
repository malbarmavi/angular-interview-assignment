import { Directive, HostBinding, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[draggable]'
})
export class DraggableDirective {

  @Input() data: any;
  @Output("droped") droped = new EventEmitter();
  @HostBinding() draggable = true;

  @HostListener("dragstart", ['$event']) ondragstart(e) {
    e.dataTransfer.setData('text', JSON.stringify(this.data));
  }

  @HostListener("dragover", ['$event']) ondragover(e: Event) {
    e.preventDefault()
  }

  @HostListener("drop", ['$event']) ondrop(e: DragEvent) {
    e.preventDefault();
    this.droped.emit(e)
  }

  constructor() { }

}
