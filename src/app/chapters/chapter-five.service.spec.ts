import { TestBed } from '@angular/core/testing';

import { ChapterFiveService } from './chapter-five.service';

describe('ChapterFiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChapterFiveService = TestBed.get(ChapterFiveService);
    expect(service).toBeTruthy();
  });
});
