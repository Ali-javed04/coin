import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsStep6Component } from './listings-step6.component';

describe('ListingsStep6Component', () => {
  let component: ListingsStep6Component;
  let fixture: ComponentFixture<ListingsStep6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingsStep6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsStep6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
