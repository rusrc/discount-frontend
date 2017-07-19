import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionItemComponent } from './promotion-item.component';

describe('PromotionItemComponent', () => {
  let component: PromotionItemComponent;
  let fixture: ComponentFixture<PromotionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
