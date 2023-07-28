import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AllServiceService } from 'src/app/service/all-service.service';

import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productpages',
  templateUrl: './productpages.component.html',
  styleUrls: ['./productpages.component.css']
})
export class ProductpagesComponent implements OnInit {
  productimages: any[] = [];
  prductid: any[] = []
  constructor(private https: HttpClient, private router: Router, private allservice: AllServiceService, private msgService: MessageService, private confirmService: ConfirmationService) {
  }
  ngOnInit(): void {
    this.getproductimage();
    this.getallproductid();
  }
  productobj: any = {
    "productImageId": 0,
    "productId": 0,
    "imageUrl": "",
    "isThumbnailImage": true,
    "orderNo": 0
  }

  deletecard(id: number) {
    const isdelete = confirm("Are You want to delete record")
    if (isdelete) {
      this.https.get("http://onlinetestapi.gerasim.in/api/Aqua/DeleteProdutImageByProductId?id=" + id).subscribe((res: any) => {
        if (res.result) {
          alert('Category deleted Success');
          this.getproductimage();
        } else {
          alert(res.message);
        }
      })
    }
  }
  eidtproduct(id: number) {
    debugger
    this.https.post('http://onlinetestapi.gerasim.in/api/Aqua/UpdateProductImage' + id, {})
      .subscribe((res: any) => {
        this.productobj = res.data;
      });
  }
  savechanges() {
    debugger
    this.https.post("http://onlinetestapi.gerasim.in/api/Aqua/AddNewProductImage", this.productobj).subscribe((res: any) => {
      if (res.message) {
        this.msgService.add({ key: "bc", severity: 'success', summary: 'Success', detail: 'Created successfully', life: 1000 });
        //alert("Entry Created Successfully");
        this.getproductimage();
      }
      else {
        this.msgService.add({ key: "bc", severity: 'error', summary: 'Not saved', detail: 'Delivery pincode not saved', life: 1000 });
        // alert(res.result)
      }
    })
  }
  getallproductid() {
    this.https.get("http://onlinetestapi.gerasim.in/api/Aqua/GetAllProduct").subscribe((res: any) => {
      this.prductid = res.data;
    })
  }
  getproductimage() {
    this.https.get("http://onlinetestapi.gerasim.in/api/Aqua/GetImagesByProducId?productid=144").subscribe((res: any) => {
      this.productimages = res.data
    })
  }
  changefile(event: any) {
    debugger
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file.type == 'image/png' || file.type == 'image/jpeg') {
        const formdata = new FormData();
        formdata.append('file', file);
        this.https.post("https://storeapi.gerasim.in/api/Customer/Upload", formdata).subscribe((res: any) => {
          debugger;
          this.productobj.ImageUrl = res;
        });
      }
      else {
        this.msgService.add({ key: "bc", severity: 'info', detail: 'Please select png or jpeg', life: 1000 });
        //alert("please select png or jpeg ")
      }
    }
  }
}
