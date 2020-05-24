import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee } from '../service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
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
  showform : boolean = false;
  popoverTitle = 'Are you sure?';
  popoverMessage = 'Are you sure you want to UPDATE? ';
  confirmClicked = false;
  cancelClicked = false;
  constructor(private _router: Router,private _httpservice:HttpClientService) { }

  searchEmploye(){
    this.data.empid = this.empid;
    this._httpservice.searchEmploye(this.data)
        .subscribe( data => { 
          if(!!data){
            this.showform = true;
          }else{
            this.showform = false;
            alert("Please provide valid employee id");
          }
        });
  }

  createEmployee(): void {
    this.data.empid = this.empid;
    this.data.firstname = this.firstname;
    this.data.lastname = this.lastname;
    this.data.mobile = this.mobile;
    this.data.address = this.address;
    this.data.dob = this.dob;
    this.data.city = this.city;
    this._httpservice.createEmployee(this.data)
        .subscribe( data => { 
          alert("Employee updated successfully.");
          var path="update";
          this._httpservice.reloadComponent(path);
        });
  };

  ngOnInit() {
  }

}
