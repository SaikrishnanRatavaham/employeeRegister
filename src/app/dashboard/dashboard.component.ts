import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public listOfEmployees: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.listOfEmployees =  JSON.parse(localStorage.getItem('employeesList'));
    console.log(this.listOfEmployees);
     localStorage.setItem('employeesList', (JSON.stringify(this.listOfEmployees)))  
  }
  createList() {
    this.router.navigate(['/']);
  }
  SignOut() {
     localStorage.removeItem("employeesList");
     this.router.navigate(['/']);
  }
    
}
