import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  title: string = "New Training";
  left_button: string = "Start";
  description: any = "By clicking on this button you can start your first training";

  constructor() { }

  ngOnInit(): void {
  }

}
