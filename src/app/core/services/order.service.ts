import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderObj } from '../classes/order-obj';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = "http://onlinetestapi.gerasim.in/api/Aqua"

  constructor(private http: HttpClient) { }
  
  /**
   * GetAllOrders List
   * @returns 
   */
  getAllOrders(): Observable<Order[]>  {
    return this.http.get<Order[]>( this.url +"/GetAllOrders");
  }

  /**
   * getOrderByOrderId
   * @param id 
   * @returns 
   */
  getOrderByOrderId(id:number):Observable<OrderObj> {
    return this.http.get<OrderObj>(this.url + "/GetOrderByOrderId?orderId=" + id);
  }

}
