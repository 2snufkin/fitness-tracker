import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.css']
})
export class TrainingCardComponent implements OnInit {
  @Input() header: string | undefined;
  @Input() left_button: string | undefined;
 @Input() desc: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
