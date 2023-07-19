import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-registrations',
  templateUrl: './vendor-registrations.component.html',
  styleUrls: ['./vendor-registrations.component.css']
})
export class VendorRegistrationsComponent implements OnInit{
  myproductid:any[]=[]
  constructor(private https:HttpClient){

  }
  ngOnInit(): void {
    this.productid();
    
  }
productobj:any={
  "productId": 0,
  "vendorId": 0,
  "sku": "string",
  "shortName": "string",
  "fullName": "string",
  "productCategoryId": 0,
  "shortDescription": "string",
  "longDescription": "string",
  "createdOn": "2023-07-18T08:10:43.339Z",
  "preatedBy": 0,
  "productType": "string",
  "isStockAvailable": true,
  "modifiedOn": "2023-07-18T08:10:43.339Z",
  "modifiedBy": 0,
  "isVarientAvailable": true,
  "isSpecificationAvailable": true,
  "productBasePrice": 0,
  "searchKeyWords": "string",
  "thumbnailImageUrl": "string"
}

deletecard(id:number){
  const isdelete=confirm("Are You want to delete record")
  if(isdelete){
    this.https.post("http://onlinetestapi.gerasim.in/api/Aqua/DeleteProdutImageByProductId?productId="+id ,{}).subscribe((res:any)=>{
      debugger;
          this.productid();
        })
  }
}
  productid(){
    this.https.get("http://onlinetestapi.gerasim.in/api/Aqua/GetAllProduct").subscribe((res:any)=>{
    this.myproductid=res.data
    })
  }
  changefile(event:any){
    debugger
    if(event.target.files.length>0){
    const file=event.target.files[0];
    if(file.type=='image/png' || file.type=='image/jpeg'){
      const formdata= new FormData();
      formdata.append('file',file);
      this.https.post("https://storeapi.gerasim.in/api/Customer/Upload",formdata).subscribe((res:any)=>{
        debugger;
      });
    }
    else{
      alert("please select png or jpeg ")
    }
    }
  }
}
