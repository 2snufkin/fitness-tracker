import { Component, OnInit } from '@angular/core';
import {NavigationService} from "./navigation.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'fitness-tracker';
  navigation: string [] = []

  constructor(private navService: NavigationService) {
  }

  ngOnInit(): void {
        this.navigation = this.navService.get_navi_links()
    }


}
