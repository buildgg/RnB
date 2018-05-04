import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBDListComponent } from './bbd-list.component';

describe('BudgetBaseDocumentListComponent', () => {
  let component: BBDListComponent;
  let fixture: ComponentFixture<BBDListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBDListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBDListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
