/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChantComponent } from './chant.component';

describe('ChantComponent', () => {
  let component: ChantComponent;
  let fixture: ComponentFixture<ChantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
