import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfuctdetailComponent } from './profuctdetail.component';

describe('ProfuctdetailComponent', () => {
  let component: ProfuctdetailComponent;
  let fixture: ComponentFixture<ProfuctdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfuctdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfuctdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
