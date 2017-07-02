import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRealstateComponent } from './add-realstate.component';

describe('AddRealstateComponent', () => {
  let component: AddRealstateComponent;
  let fixture: ComponentFixture<AddRealstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRealstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRealstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
