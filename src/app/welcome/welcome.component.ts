import { Component, OnInit } from '@angular/core';
import {EyeExcService} from "../services/eye-exc.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators"
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
   eyeExe$ : Observable<any> | undefined
  button :string = "Go"
   constructor(private eyeExeService: EyeExcService) { }

  ngOnInit() {
     this.eyeExe$ = this.eyeExeService.getAllExercises();
      this.eyeExe$.subscribe(resu => {
        for (let ele of resu){
          console.log(ele)
        }
      })

}
}
