import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealstateListComponent } from './realstate-list.component';

describe('RealstateListComponent', () => {
  let component: RealstateListComponent;
  let fixture: ComponentFixture<RealstateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealstateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealstateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
