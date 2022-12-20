import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiniComponent } from './pini.component';

describe('PiniComponent', () => {
  let component: PiniComponent;
  let fixture: ComponentFixture<PiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
