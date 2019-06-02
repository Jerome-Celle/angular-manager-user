import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerUserLibComponent } from './manager-user-lib.component';

describe('ManagerUserLibComponent', () => {
  let component: ManagerUserLibComponent;
  let fixture: ComponentFixture<ManagerUserLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerUserLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerUserLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
