import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable, Subscription} from "rxjs";
import {EyeExercise} from "../interfaces/eye-exercise";
import {map} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class EyeExcService {

   constructor(private db: AngularFirestore) {

  }


  getAllExercises(): Observable<any> {
    return this.db.collection('eye_ex').valueChanges()
  }

  cancelAllSubscriptions(){

  }
}
