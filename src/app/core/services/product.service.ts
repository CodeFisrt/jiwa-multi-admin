import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeliveryLocationCreateArray, DeliveryLocObjArrayData } from '../interfaces/deliverLocation';
import { ProductArray } from '../interfaces/product';
import { SpecificationArray, SpecificationObjArray } from '../interfaces/specification';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = "http://onlinetestapi.gerasim.in/api/Aqua"

  constructor(private http: HttpClient) { }
  /**
   * Delivery Locations
   * @returns 
   */

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

/**
 * Product Specification 
 * @param specificationObj 
 * @returns 
 */
  createSpecification(specificationObj: SpecificationArray[]): Observable<SpecificationArray[]> {
    return this.http.post<SpecificationArray[]>(this.url + "/AddProductBulkSpecification", specificationObj);
  }
  GetSpecificationByProductId(id:number):Observable<SpecificationObjArray[]> {
    return this.http.get<SpecificationObjArray[]>(this.url + "/GetSpecificationByProductId?id=" +id);
  }

  updateSpecification(specificationObj: SpecificationArray[]): Observable<SpecificationArray[]> {
    return this.http.post<SpecificationArray[]>(this.url + "/AddProductBulkSpecification", specificationObj);
  }

  deleteSpecification(id: number): Observable<SpecificationArray[]> {
    return this.http.get<SpecificationArray[]>( this.url +"/DeleteProductSpecificationById?id=" + id)
  }

  /**
   * Product Form
   */

  

  /**
   * Product List
   */

}
