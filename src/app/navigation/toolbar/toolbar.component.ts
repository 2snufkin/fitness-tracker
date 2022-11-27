import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NavigationService} from "../../navigation.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() menuEvent: EventEmitter<void> = new EventEmitter<void>();

  navigation: string [] = []

  constructor(private navService: NavigationService) {
  }

  ngOnInit(): void {
    this.navigation = this.navService.get_navi_links();
  }


  informSideNav() {
    this.menuEvent.emit();
    console.log("was emitted");
  }
}
