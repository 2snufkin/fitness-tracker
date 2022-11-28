import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
  is_running= false;
  is_show= false;
  @Input() progress: number | undefined;
  clock_progress = 0;



  constructor() {
  }

  ngOnInit(): void {
  }


  toogle_spinner() {
    if (!this.is_show) this.is_show = true;
    this.is_running = !this.is_running;
    console.log(this.is_running)
    if (this.is_running){
      const intval = setInterval(() =>{
        this.clock_progress += 30;
      }, 1000)
    }
    else{
      console.log("i am at else")
    }

    this.eventEmmiter.emit(!this.isClicked)

  }
}
