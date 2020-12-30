import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesServicesService {
  public employeesDetails: any = [];
  constructor() { }
  getListDetails(listEmployees) {
    if (listEmployees) {
      this.employeesDetails.push(listEmployees);
      var employeesDetailsStore: any =   this.employeesDetails
      localStorage.setItem('employeesList', (JSON.stringify(employeesDetailsStore)))  
    }  
    
  }
}
