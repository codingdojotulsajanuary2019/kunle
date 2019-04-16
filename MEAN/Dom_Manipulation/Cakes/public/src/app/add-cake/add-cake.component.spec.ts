import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCAkeComponent } from './add-cake.component';

describe('AddCAkeComponent', () => {
  let component: AddCAkeComponent;
  let fixture: ComponentFixture<AddCAkeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCAkeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCAkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
