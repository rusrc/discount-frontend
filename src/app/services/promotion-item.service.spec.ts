import { TestBed, inject } from '@angular/core/testing';

import { PromotionItemService } from './promotion-item.service';

describe('PromotionItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PromotionItemService]
    });
  });

  it('should be created', inject([PromotionItemService], (service: PromotionItemService) => {
    expect(service).toBeTruthy();
  }));
});
