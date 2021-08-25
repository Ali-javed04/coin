import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAllWithoutMapComponent } from './search-all-without-map.component';

describe('SearchAllWithoutMapComponent', () => {
  let component: SearchAllWithoutMapComponent;
  let fixture: ComponentFixture<SearchAllWithoutMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAllWithoutMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAllWithoutMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
