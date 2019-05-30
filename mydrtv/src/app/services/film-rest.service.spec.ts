import { TestBed } from '@angular/core/testing';

import { FilmRestService } from './film-rest.service';
import { HttpClientModule } from '@angular/common/http';

describe('FilmRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[ 
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: FilmRestService = TestBed.get(FilmRestService);
    expect(service).toBeTruthy();
  });
});
