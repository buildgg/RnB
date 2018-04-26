import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetBaseDocumentEditComponent } from './budget-base-document-edit.component';

describe('BudgetBaseDocumentEditComponent', () => {
  let component: BudgetBaseDocumentEditComponent;
  let fixture: ComponentFixture<BudgetBaseDocumentEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetBaseDocumentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetBaseDocumentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
