import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {BehaviorSubject, interval} from "rxjs";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit, OnDestroy {
  title: string = "New Training";
  left_button: string = "Start";
  description: any = "By clicking on this button you can start your first training";
  is_running =false;
  progress = 0;

  constructor() { }


  ngOnInit(): void {
  }

  ngOnDestroy() {
    clearInterval()
  }

  clicked() {
    this.is_running = !this.is_running
    // find out if you are running
    if (this.is_running){
      this.left_button = "Stop";
      const interval = setInterval(()=> {
        this.progress += 10;
        if (this.progress == 100){
          clearInterval(interval)
        }
      },1000)
    }
    else{
      this.left_button = "Start";
      clearInterval()

    }
    console.log("new component" + this.is_running)


  }
}
