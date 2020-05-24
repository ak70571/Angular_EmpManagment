import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Router } from '@angular/router';

export class Employee{
  empid:any;
  firstname: any;
  lastname : any;
  mobile : any;
  address : any;
  dob:any;
  city : any;
}

export class Manager {
  firstname: any;
  lastname : any;
  password : any;
  address : any;
  dob:any;
  company : any;
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient,private _router: Router) { }

  public getEmployees(){
    console.log("test call");
    return this.httpClient.get<Employee[]>('http://localhost:8484/getRecords');
  }

  public searchEmploye(data){
    console.log("test call");
    return this.httpClient.get<Employee[]>('http://localhost:8484/'+data.empid);
  }

  public getManager(manager){
    console.log("http://localhost:8484/"+manager.firstname+"/"+manager.password);
    return this.httpClient.get<Manager[]>("http://localhost:8484/"+manager.firstname+"/"+manager.password);
  }

  public deleteEmployee(employee) {
    console.log("Employee object"+employee  );
    return this.httpClient.delete<Employee>("http://localhost:8484/DeleteRecords" + "/"+ employee);
  
  }

  public createEmployee(employee) {
    console.log("Employee object"+JSON.stringify(employee));
    //return this.httpClient.post<Employee>("http://localhost:8484/employees", employee);
    return this.httpClient.post<Employee>("http://localhost:8484/employee", employee);
  }

  public createManager(manager) {
    console.log("Manager object"+JSON.stringify(manager));
    return this.httpClient.post<Manager>("http://localhost:8484/manager", manager);
  }

  reloadComponent(path) {
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.onSameUrlNavigation = 'reload';
    this._router.navigate(['/'+path]);
}
}
