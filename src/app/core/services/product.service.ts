import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeliveryLocationCreateArray, DeliveryLocObjArrayData } from '../interfaces/deliverLocation';
import { ProductArray } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = "http://onlinetestapi.gerasim.in/api/Aqua"

  constructor(private http: HttpClient) { }

  getAllProducts():Observable<ProductArray[]> {
    return this.http.get<ProductArray[]>(this.url + "/GetAllProduct");
  }

  createdelverlyLocation(deliveryLocObj: DeliveryLocationCreateArray[]): Observable<DeliveryLocationCreateArray[]> {
    return this.http.post<DeliveryLocationCreateArray[]>(this.url + "/AddDeliveryLocation", deliveryLocObj);
  }

  GetDeliveryLocationsByProductId(id:number):Observable<DeliveryLocObjArrayData[]> {
    return this.http.get<DeliveryLocObjArrayData[]>(this.url + "/GetDeliveryLocationsByProductId?id=" +id);
  }

  updateDeliveryLocation(deliveryObjarray: DeliveryLocationCreateArray[]): Observable<DeliveryLocationCreateArray[]> {
    return this.http.post<DeliveryLocationCreateArray[]>(this.url + "/AddDeliveryLocation", deliveryObjarray);
  }

  deleteDeliveryLocation(id: number): Observable<DeliveryLocationCreateArray[]> {
    return this.http.get<DeliveryLocationCreateArray[]>( this.url +"/DeleteDeliveryLocationById?id=" + id)
  }

}
