import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsStep2Component } from './listings-step2.component';

describe('ListingsStep2Component', () => {
  let component: ListingsStep2Component;
  let fixture: ComponentFixture<ListingsStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingsStep2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
