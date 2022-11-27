import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private navigation : string [] = ['Training', 'Avishay','Login', 'Signup']
  constructor() { }

  get_navi_links(){
    return [...this.navigation]
  }
}
