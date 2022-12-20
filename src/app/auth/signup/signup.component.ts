import { Component, OnInit } from '@angular/core';
import {User} from '../../interfaces/user'
import {user} from "@angular/fire/auth";
import {AuthService} from "../../services/auth.service";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSumbit(form: any) {
    let user :  User = {
      email: form.email,
      password: form.password
    }
    console.log(user)
    this.authService.singup(user);


  }
}
