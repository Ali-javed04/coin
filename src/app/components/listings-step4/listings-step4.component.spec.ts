import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsStep4Component } from './listings-step4.component';

describe('ListingsStep4Component', () => {
  let component: ListingsStep4Component;
  let fixture: ComponentFixture<ListingsStep4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingsStep4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
