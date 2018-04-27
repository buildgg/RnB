import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetBaseDocumentListComponent } from './budget-base-document-list.component';

describe('BudgetBaseDocumentListComponent', () => {
  let component: BudgetBaseDocumentListComponent;
  let fixture: ComponentFixture<BudgetBaseDocumentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetBaseDocumentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetBaseDocumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
