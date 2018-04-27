import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetPositionEditComponent } from './budget-position-edit.component';

describe('BudgetPositionEditComponent', () => {
  let component: BudgetPositionEditComponent;
  let fixture: ComponentFixture<BudgetPositionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetPositionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetPositionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
