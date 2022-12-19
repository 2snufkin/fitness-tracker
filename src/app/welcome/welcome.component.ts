import { Component, OnInit } from '@angular/core';
import {EyeExcService} from "../eye-exc.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
   eyeExe$ : Observable<any> |undefined

  constructor(private eyeExeService: EyeExcService) { }

  ngOnInit(): void {
     this.eyeExe$ = this.eyeExeService.getAllExcercies();

  }

}
