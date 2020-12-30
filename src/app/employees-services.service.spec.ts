import { TestBed } from '@angular/core/testing';

import { EmployeesServicesService } from './employees-services.service';

describe('EmployeesServicesService', () => {
  let service: EmployeesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
