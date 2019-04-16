import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllCakeComponent } from './show-all-cake.component';

describe('ShowAllCakeComponent', () => {
  let component: ShowAllCakeComponent;
  let fixture: ComponentFixture<ShowAllCakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllCakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
