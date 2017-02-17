/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChantStartComponent } from './chant-start.component';

describe('ChantStartComponent', () => {
  let component: ChantStartComponent;
  let fixture: ComponentFixture<ChantStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChantStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChantStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
