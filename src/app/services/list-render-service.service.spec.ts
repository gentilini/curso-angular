import { TestBed } from '@angular/core/testing';

import { ListRenderServiceService } from './list-render-service.service';

describe('ListRenderServiceService', () => {
  let service: ListRenderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListRenderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
