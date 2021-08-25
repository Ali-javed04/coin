import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsStep3Component } from './listings-step3.component';

describe('ListingsStep3Component', () => {
  let component: ListingsStep3Component;
  let fixture: ComponentFixture<ListingsStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingsStep3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
