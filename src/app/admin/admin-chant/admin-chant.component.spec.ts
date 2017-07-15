import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChantComponent } from './admin-chant.component';

describe('AdminChantComponent', () => {
  let component: AdminChantComponent;
  let fixture: ComponentFixture<AdminChantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminChantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
