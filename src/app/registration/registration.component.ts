import { Component, OnInit } from '@angular/core';
import { HttpClientService,Manager } from '../service/http-client.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  dob : any;
  today : any;
  maxdate : any;
  firstname: any;
  lastname: any;
  password: any;
  address: any;
  company: any;
  data : Manager = new Manager();
  constructor(private _httpservice:HttpClientService) { }

  regManager(data):void{
    this.data.firstname = this.firstname;
    this.data.lastname = this.lastname;
    this.data.password = this.password;
    this.data.address = this.address;
    this.data.dob = this.dob;
    this.data.company = this.company;
    var path = "registration";
    this._httpservice.createManager(this.data)
        .subscribe( data => { 
          alert("Employee created successfully.");
          this._httpservice.reloadComponent(path);
        });
  }

  ngOnInit() {
    const now = new Date();
      this.today = now.toISOString();
      this.maxdate = this.today;
  }
}
