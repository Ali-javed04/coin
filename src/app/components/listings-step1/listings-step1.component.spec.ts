import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsStep1Component } from './listings-step1.component';

describe('ListingsStep1Component', () => {
  let component: ListingsStep1Component;
  let fixture: ComponentFixture<ListingsStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingsStep1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
