import { TestBed } from '@angular/core/testing';

import { ManagerUserLibService } from './manager-user-lib.service';

describe('ManagerUserLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagerUserLibService = TestBed.get(ManagerUserLibService);
    expect(service).toBeTruthy();
  });
});
