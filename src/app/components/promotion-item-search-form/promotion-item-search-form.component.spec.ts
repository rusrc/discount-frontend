import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionItemSearchFormComponent } from './promotion-item-search-form.component';

describe('PromotionItemSearchFormComponent', () => {
  let component: PromotionItemSearchFormComponent;
  let fixture: ComponentFixture<PromotionItemSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionItemSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionItemSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
