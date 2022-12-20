import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(form: any) {
    const user : User = {
      email: form.email,
      password: form.password
    }
    console.log(user)
    this.authService.login(user);

  }
}
