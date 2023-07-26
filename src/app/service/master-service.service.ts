import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  

  constructor(private http:HttpClient) { }

  loadAllCustomer() : Observable<any>{
    return this.http.get("https://onlinetestapi.gerasim.in/api/Aqua/GetAllCustomers");
  }
  loadCustomerById(id:number) : Observable<any>{
    return this.http.get('https://onlinetestapi.gerasim.in/api/Aqua/GetCustomerByCustomerId?id=' + id);
  }
  loadCustomerAddressById(id:any) : Observable<any>{
    return this.http.get('https://onlinetestapi.gerasim.in/api/Aqua/GetAllCustomerAddessById?id='+ id);

  }
}
