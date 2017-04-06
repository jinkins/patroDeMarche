import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCampComponent } from './admin-camp.component';

describe('AdminCampComponent', () => {
  let component: AdminCampComponent;
  let fixture: ComponentFixture<AdminCampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
