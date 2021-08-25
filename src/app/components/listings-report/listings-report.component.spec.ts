import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsReportComponent } from './listings-report.component';

describe('ListingsReportComponent', () => {
  let component: ListingsReportComponent;
  let fixture: ComponentFixture<ListingsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingsReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
