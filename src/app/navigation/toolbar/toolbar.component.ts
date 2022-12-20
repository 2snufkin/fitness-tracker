import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NavigationService} from "../../services/navigation.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() menuEvent: EventEmitter<void> = new EventEmitter<void>();
  isInside = false;


  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
   this.authService.isLoginSubject.subscribe( r=> {
     this.isInside = r;
   })
  }


  informSideNav() {
    this.menuEvent.emit();
    console.log("was emitted");
  }


  disconnect() {
    this.authService.logOut();
  }
}
