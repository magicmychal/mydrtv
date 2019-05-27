import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

describe('AuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[ 
      HttpClientModule,
      RouterModule.forRoot([]),
      StoreModule.forRoot({}),
    ]
  }));

  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  });
});
