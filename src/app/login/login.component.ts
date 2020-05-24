import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService, Manager } from '../service/http-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:any;
  password:any;
  data : Manager = new Manager();
  constructor(private _router: Router,private _httpservice:HttpClientService) { }

  createManager(){
    this._router.navigate(['/registration']);
  }

  login(){
    this.data.firstname = this.username;
    this.data.password = this.password;
    this._httpservice.getManager(this.data)
        .subscribe( data => { 
          if(!!data){
            this._router.navigate(['/addemployee']);
          }else{
            alert("Please provide valid credentials");
          }
        });
  }

  ngOnInit() {
  }

}
