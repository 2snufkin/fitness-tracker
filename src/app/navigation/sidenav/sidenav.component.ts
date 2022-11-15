import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NavigationService} from "../../navigation.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() linkEmitter: EventEmitter<void> = new EventEmitter<void>();
  navigation: string [] = []

  constructor(private navService: NavigationService) {
  }

  ngOnInit(): void {
    this.navigation = this.navService.get_navi_links()
  }

  onClickLink(){
    this.linkEmitter.emit();
  }
}
