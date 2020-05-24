import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee } from '../service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  
  dob : any;
  today : any;
  maxdate : any;
  empid:any;
  firstname: any;
  lastname: any;
  mobile: any;
  address: any;
  city: any;
  data : Employee = new Employee();
  
  constructor(
    private httpClientService: HttpClientService,private _router: Router
  ) { }

  ngOnInit() {
  }

  createEmployee(): void {
    this.data.empid = this.empid;
    this.data.firstname = this.firstname;
    this.data.lastname = this.lastname;
    this.data.mobile = this.mobile;
    this.data.address = this.address;
    this.data.dob = this.dob;
    this.data.city = this.city;
    this.httpClientService.createEmployee(this.data)
        .subscribe( data => { 
          alert("Employee created successfully.");
          var path= "addemployee";
          this.httpClientService.reloadComponent(path);
        });
  };

}
