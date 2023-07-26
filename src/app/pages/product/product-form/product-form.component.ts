import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
    productArray: any [] = [];
    productObj: any = {
      "productId": 0,
      "vendorId": 0,
      "sku": "",
      "shortName": "",
      "fullName": "",
      "productCategoryId": 0,
      "shortDescription": "",
      "songDescription": "",
      "createdOn": "2023-07-14T22:51:15.762Z",
      "createdBy": 0,
      "productType": "",
      "isStockAvailable":"" ,
      "modifiedOn": "2023-07-14T22:51:15.762Z",
      "modifiedBy": 0,
      "isVarientAvailable": "" ,
      "isSpecificationAvailable": "",
      "productBaseprice": 0,
      "searchKeyWords": "",
      "thumbnailImageUrl": ""
    }
      constructor(private http: HttpClient){this.getAllproduct();}
     getAllproduct(){
        this.http.get("https://onlinetestapi.gerasim.in/api/Aqua/GetAllproduct").subscribe((res:any)=>{
       this.productArray = res.data;
       })
      }
    // save
       onSave() {
       this.http.get("https://onlinetestapi.gerasim.in/api/Aqua/CreateAllproduct").subscribe((res:any)=>{
        if(res.result) {
         alert("Save Success")
        this.getAllproduct();
        } else { alert(res.message) }
      })
     }
    // reset
      onReset() {
      this.productObj.productId="";
      this.productObj.vendorId = "";
      this.productObj.sku = "";
      this.productObj.shortName = "";
      this.productObj.fullName = "";
      this.productObj.productCategoryId = "";
      this.productObj.shortDescription = "";
      this.productObj.longDescription = "";
      this.productObj.createdOn = "";
      this.productObj.createdBy = "";
      this.productObj.productType ="";
      this.productObj.isStockAvailable = "";
      this.productObj.modifiedOn = "";
      this.productObj.modifiedBy ="";
      this.productObj.isVarientAvailable = "";
     this.productObj.isSpecificationAvailable ="";
      this.productObj.productBaseprice ="";
      this.productObj.searchKeyWords ="";
      this.productObj.thumbnailImageUrl = "";
      }

}
