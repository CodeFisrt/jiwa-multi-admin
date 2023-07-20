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
  "ProductImageId": 0,
  "ProductId": 0,
  "ImageUrl": "string",
  "IsThumbnailImage": true,
  "OrderNo": 0
}

deletecard(id:number){
  const isdelete=confirm("Are You want to delete record")
  if(isdelete){
    this.https.post("http://onlinetestapi.gerasim.in/api/Aqua/GetImagesByProducId?productid=144"+id ,{}).subscribe((res:any)=>{
      if (res.result) {
        alert('Category deleted Success');
        this.productid();
      } else {
        alert(res.message);
      }
        })
  }
}
updateproduct(){
  this.https.post("http://onlinetestapi.gerasim.in/api/Aqua/UpdateProductImage", this.productobj).subscribe((resp:any)=>{
    if(resp.result){
      alert("package Update successfullly.....")
      this.productid()
    }
    else{
      alert(resp.result)
    }
  })
}
savechanges(){
  this.https.post("http://onlinetestapi.gerasim.in/api/Aqua/AddNewProductImage",this.productobj).subscribe((res:any)=>{
    if(res.message){
      alert("Entry Created Successfully");
      this.productid();
    }
    else(
      alert(res.result)
    )
  })
}
  productid(){
    this.https.get("http://onlinetestapi.gerasim.in/api/Aqua/GetImagesByProducId?productid=144").subscribe((res:any)=>{
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
