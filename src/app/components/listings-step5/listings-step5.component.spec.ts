import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsStep5Component } from './listings-step5.component';

describe('ListingsStep5Component', () => {
  let component: ListingsStep5Component;
  let fixture: ComponentFixture<ListingsStep5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingsStep5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsStep5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
