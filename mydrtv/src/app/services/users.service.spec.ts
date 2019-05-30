import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

describe('UsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[ 
      HttpClientModule,
      RouterModule.forRoot([])
    ]
  }));

  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });
});
