import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-registrations',
  templateUrl: './vendor-registrations.component.html',
  styleUrls: ['./vendor-registrations.component.css']
})
export class VendorRegistrationsComponent implements OnInit{
  productimages:any[]=[];
  prductid:any[]=[]
  constructor(private https:HttpClient){

  }
  ngOnInit(): void {
    this.getproductimage();
    this.getallproductid();
  }
productobj:any={
  "productImageId": 0,
  "productId": 0,
  "imageUrl": "",
  "isThumbnailImage": true,
  "orderNo": 0
}

deletecard(id:number){
  const isdelete=confirm("Are You want to delete record")
  if(isdelete){
    this.https.get("http://onlinetestapi.gerasim.in/api/Aqua/DeleteProdutImageByProductId?id="+id).subscribe((res:any)=>{
      if (res.result) {
        alert('Category deleted Success');
        this.getproductimage();
      } else {
        alert(res.message);
      }
        })
  }
}
eidtproduct(id:number){
  debugger
   this.https.post('http://onlinetestapi.gerasim.in/api/Aqua/UpdateProductImage'+ id, {})
  .subscribe((res: any) => {
     this.productobj = res.data;
   });
}
savechanges(){
  debugger
  this.https.post("http://onlinetestapi.gerasim.in/api/Aqua/AddNewProductImage",this.productobj).subscribe((res:any)=>{
    if(res.message){
      alert("Entry Created Successfully");
      this.getproductimage();
    }
    else(
      alert(res.result)
    )
  })
}
getallproductid(){
this.https.get("http://onlinetestapi.gerasim.in/api/Aqua/GetAllProduct").subscribe((res:any)=>{
  this.prductid=res.data;
})
}
  getproductimage(){
    this.https.get("http://onlinetestapi.gerasim.in/api/Aqua/GetImagesByProducId?productid=144").subscribe((res:any)=>{
    this.productimages=res.data
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
        this.productobj.ImageUrl = res;
      });
    }
    else{
      alert("please select png or jpeg ")
    }
    }
  }
}
