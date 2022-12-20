import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {User} from '../interfaces/user'
import {Observable, Subject} from "rxjs";
import firebase from "firebase/compat";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoginSubject: Subject<boolean> = new Subject<boolean>();


  constructor(private fireAuth: AngularFireAuth, private router: Router) {
  }

  /**
   * Angular manage the Token after the sign in
   * @param user the user that try to login
   */

  login(user: User){
    this.fireAuth.signInWithEmailAndPassword(user.email, user.password).then(
      result => {
        console.log(result)
        this.enterUser()
      })
          .catch( error => {
            console.log(error)
            console.log("an error in the signup has occurred")
          })
        ;

      }


  /**
   * The token will be destroyed
   */
  logOut(){
    this.fireAuth.signOut().then(r => {
      console.log(r);
      this.exitUser()
    });

  }

  singup(user: User): void{
    this.fireAuth.createUserWithEmailAndPassword(user.email, user.password).then(
      result => {
        console.log(result)
        this.enterUser()
      }
    )
      .catch( error => {
        console.log(error)
        console.log("an error in the signup has occurred")
      })
    ;

  }

  initAuth():  Observable<firebase.User | null>{
    return this.fireAuth.authState

  }

  enterUser(){
    this.isLoginSubject.next(true);
    this.router.navigate(['/training'])



  }

  exitUser(){
    this.isLoginSubject.next(false);
    this.router.navigate(['/login'])

  }
}
