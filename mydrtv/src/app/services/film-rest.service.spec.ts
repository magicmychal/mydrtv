import { TestBed } from '@angular/core/testing';

import { FilmRestService } from './film-rest.service';

describe('FilmRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmRestService = TestBed.get(FilmRestService);
    expect(service).toBeTruthy();
  });
});
