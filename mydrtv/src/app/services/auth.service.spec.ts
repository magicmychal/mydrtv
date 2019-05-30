import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[ 
      HttpClientModule,
      RouterModule.forRoot([]),
      StoreModule.forRoot({}),
    ]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

});
