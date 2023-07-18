import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorslistService {

  constructor(private http:HttpClient) {}
  loaduser():Observable<any>{
    return this.http.get("http://onlinetestapi.gerasim.in/api/Aqua/GetAllVendors");
  }

editData(id:number):Observable<any>{
return this.http.get("http://onlinetestapi.gerasim.in/api/Aqua/GetVendorById?id=" +id);
}
saveData(obj:any):Observable<any>{
return this.http.post("http://onlinetestapi.gerasim.in/api/Aqua/CreateVendor",obj);
}
deleteData(id:number):Observable<any>{
return this.http.get("http://onlinetestapi.gerasim.in/api/Aqua/DeleteVendorById?id=" +id,{})
}
updateData(obj:any):Observable<any>{
return this.http.post("http://onlinetestapi.gerasim.in/api/Aqua/UpdateVendor",obj);
}
}
