import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./auth/login/login.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {WelcomeComponent} from "./welcome/welcome.component"
import {NgModule} from '@angular/core'


const router: Routes = [
  {path: '', component:  WelcomeComponent },
  {path: 'login', component: LoginComponent},
  {path:'signup', component: SignupComponent}
]

@NgModule(
  {
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
  }
)




export class RoutingModule{

  }
