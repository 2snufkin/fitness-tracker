import { Component, OnInit } from '@angular/core';
import {NavigationService} from "./services/navigation.service";
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'fitness-tracker';
  navigation: string [] = []

  constructor(private navService: NavigationService, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
        this.navigation = this.navService.get_navi_links();
        this.authService.initAuth().subscribe( user => {
          this.router.navigate(['/training']).then(
            r => {
              console.log(r)
            }
          ).catch(e => {
            console.log(e)
          })

        })

    }


}
