import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllServiceService {

  constructor(private http: HttpClient) { }

  getproductList() {
    return this.http.get<any>('..app/pages/delivary-locations');
  }

}
