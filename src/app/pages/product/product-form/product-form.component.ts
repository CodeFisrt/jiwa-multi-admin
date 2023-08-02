import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  @Input() productId: number = 0;
  productArray: any[] = [];
  productObj: any = {
    "productId": 0,
    "vendorId": 0,
    "sku": "",
    "shortName": "",
    "fullName": "",
    "productCategoryId": 0,
    "shortDescription": "",
    "songDescription": "",
    "createdOn": "",
    "createdBy": 0,
    "productType": "",
    "isStockAvailable": "",
    "modifiedOn": "",
    "modifiedBy": 0,
    "isVarientAvailable": "",
    "isSpecificationAvailable": "",
    "productBaseprice": 0,
    "searchKeyWords": "",
    "thumbnailImageUrl": ""
  }
  constructor(private http: HttpClient) { 
    this.getAllproduct();
  }

  //get all products
  getAllproduct() {
    this.http.get("https://onlinetestapi.gerasim.in/api/Aqua/GetAllproduct").subscribe((response: any) => {
      this.productArray = response.data;
    })
  }

  // Create product
  onSave() {
    this.http.post("https://onlinetestapi.gerasim.in/api/Aqua/CreateAllproduct",this.productObj).subscribe((response: any) => {
      if (response.result) {
        alert("Product added successfully");
        this.getAllproduct();
      } else {
         alert(response.message);
        }
    })
  }

  // Edit product by id
  onEditProduct() {
    debugger;
    this.http.get("http://onlinetestapi.gerasim.in/api/Aqua/GetProductById?id=" +this.productId);
  }

  //update product
  updateProduct() {
    this.http.post("http://onlinetestapi.gerasim.in/api/Aqua/UpdateProduct",this.productObj)
    .subscribe((response:any) => {
    if(response.result) {
      alert("Product updated successfully");
      this.getAllproduct();
    }
    else {
      alert(response.message);
    }
    })
  }

  // reset
  onReset() {
    this.productObj.productId = "";
    this.productObj.vendorId = "";
    this.productObj.sku = "";
    this.productObj.shortName = "";
    this.productObj.fullName = "";
    this.productObj.productCategoryId = "";
    this.productObj.shortDescription = "";
    this.productObj.longDescription = "";
    this.productObj.createdOn = "";
    this.productObj.createdBy = "";
    this.productObj.productType = "";
    this.productObj.isStockAvailable = "";
    this.productObj.modifiedOn = "";
    this.productObj.modifiedBy = "";
    this.productObj.isVarientAvailable = "";
    this.productObj.isSpecificationAvailable = "";
    this.productObj.productBaseprice = "";
    this.productObj.searchKeyWords = "";
    this.productObj.thumbnailImageUrl = "";
  }

        // Editor
 editorConfig: AngularEditorConfig = {
  editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
 }

}
