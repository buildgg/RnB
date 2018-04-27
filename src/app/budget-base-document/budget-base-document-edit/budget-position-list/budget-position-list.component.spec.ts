import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetPositionListComponent } from './budget-position-list.component';

describe('BudgetPositionListComponent', () => {
  let component: BudgetPositionListComponent;
  let fixture: ComponentFixture<BudgetPositionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetPositionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetPositionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
