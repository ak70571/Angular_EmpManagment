import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee } from '../service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];
  popoverTitle = 'Are you sure?';
  popoverMessage = 'Are you sure you want to delete? <br> All information associated to this user profile will be permanently deleted. This operation can not be undone.';
  confirmClicked = false;
  cancelClicked = false;
   
  constructor(
    private httpClientService: HttpClientService,private _router: Router
  ) { }


  deleteEmployee(employee: Employee): void {
    this.httpClientService.deleteEmployee(employee)
      .subscribe( data => {
        this.employees = this.employees.filter(u => u !== employee);
        var path = "employee";
        this.httpClientService.reloadComponent(path);
      })
  };

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
     response =>{this.employees = response;
    }
    );
  }
}
