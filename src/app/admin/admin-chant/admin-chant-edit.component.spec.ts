import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChantEditComponent } from './admin-chant-edit.component';

describe('AdminChantEditComponent', () => {
  let component: AdminChantEditComponent;
  let fixture: ComponentFixture<AdminChantEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminChantEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChantEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
