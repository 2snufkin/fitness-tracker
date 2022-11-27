import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.css']
})
export class TrainingCardComponent implements OnInit {
  @Input() header: string | undefined;
  @Input() left_button: string | undefined;
  @Input() desc: string | undefined;
  @Output() eventEmmiter: EventEmitter<boolean> = new EventEmitter();
  isClicked: boolean = false;
  running= false;
  @Input() progress: number | undefined;



  constructor() {
  }

  ngOnInit(): void {
  }

  emitToParent($event: MouseEvent) {
    console.log($event.button);
    this.eventEmmiter.emit(!this.isClicked)

  }

  toogle_spinner() {
    this.running = !this.running;
    console.log(this.running)
    this.eventEmmiter.emit(this.running)
  }
}
