import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMobComponent } from './sidebar-mob.component';

describe('SidebarMobComponent', () => {
  let component: SidebarMobComponent;
  let fixture: ComponentFixture<SidebarMobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarMobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarMobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
