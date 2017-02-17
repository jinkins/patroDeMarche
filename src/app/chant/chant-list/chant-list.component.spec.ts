/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChantListComponent } from './chant-list.component';

describe('ChantListComponent', () => {
  let component: ChantListComponent;
  let fixture: ComponentFixture<ChantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
