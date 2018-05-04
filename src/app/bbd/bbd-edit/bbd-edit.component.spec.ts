import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBDEditComponent } from './bbd-edit.component';

describe('BBDEditComponent', () => {
  let component: BBDEditComponent;
  let fixture: ComponentFixture<BBDEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBDEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBDEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
