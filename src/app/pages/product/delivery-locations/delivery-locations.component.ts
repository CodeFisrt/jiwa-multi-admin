import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delivery-locations',
  templateUrl: './delivery-locations.component.html',
  styleUrls: ['./delivery-locations.component.css'],
})
export class DeliveryLocationsComponent {
  isNewDiv: boolean = false;
  ProductList: any[] = [];
  VarientList: any[] = [];
  productId: any[] = [];
  loader = true;
  ProductObj: any = {
    productVarientId: 0,
    productId: 0,
    varientName: '',
    varientPrice: 0,
    isActive: true,
    jiwaProductVarientSpecifications: [],
  };
  SpecsObj: any = {
    productSpecificationId: 0,
    specificationKey: '',
    specificationValue: '',
    isActive: true,
    varientId: 0,
  };
  onAdd() {
    const strobj = JSON.stringify(this.SpecsObj);
    const obj = JSON.parse(strobj);
    this.ProductList.unshift(obj);
    this.SpecsObj = {
      ProductSpecificationId: 0,
      SpecificationKey: '',
      SpecificationValue: '',
      IsActive: true,
      VarientId: 0,
    };
  }
  constructor(private http: HttpClient) {
    this.loadProduct();
    this.getProductId();
  }

  loadProduct() {
    this.http
      .get(
        'https://onlinetestapi.gerasim.in/api/Aqua/GetProductVarientsByProductId'
      )
      .subscribe((response: any) => {
        this.VarientList = response.data;
      });
  }

  getEmployee(productVarientId: number) {
    this.http
      .get(
        'https://onlinetestapi.gerasim.in/api/Aqua/GetVarientByVarientId?varientid=' +
        productVarientId
      )
      .subscribe((res: any) => {
        debugger;
        this.ProductObj = res.data;
        this.VarientList = this.ProductObj.jiwaProductVarientSpecifications;
        this.isNewDiv = true;
      });
  }

  getProductId() {
    this.http
      .get('https://onlinetestapi.gerasim.in/api/Aqua/GetAllProduct')
      .subscribe((res: any) => {
        this.productId = res.data;
      });
  }

  onSave() {
    this.ProductObj.jiwaProductVarientSpecifications = this.ProductList;
    this.http
      .post(
        'https://onlinetestapi.gerasim.in/api/Aqua/AddProductVarient',
        this.ProductObj
      )
      .subscribe((response: any) => {
        if (response.result) {
          alert(response.message);
          this.getEmployee;
          this.isNewDiv = false;
        }
      });
  }
  onUpdate() {
    this.ProductObj.jiwaProductVarientSpecifications = this.ProductList;
    this.http
      .post(
        'https://onlinetestapi.gerasim.in/api/Aqua/UpdateProductVarient',
        this.ProductObj
      )
      .subscribe((response: any) => {
        if (response.result) {
          alert(response.message);
          this.getEmployee;
          this.isNewDiv = false;
        }
      });
  }

  OnDelete(id: number) {
    this.http
      .get(
        'https://onlinetestapi.gerasim.in/api/Aqua/DeleteProductVarientById?id=' +
        id
      )
      .subscribe((res: any) => {
        if (res.result) {
          alert(res.message);
        }
        this.loadProduct();
      });
  }


}
