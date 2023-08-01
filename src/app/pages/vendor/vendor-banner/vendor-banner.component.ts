import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllServiceService } from 'src/app/service/all-service.service';

import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-vendor-banner',
  templateUrl: './vendor-banner.component.html',
  styleUrls: ['./vendor-banner.component.css']
})
export class VendorBannerComponent implements OnInit {
  BannerList: any[] = [];
  Bannerobj: any = {
    "BannerId": 0,
    "VendorId": "104",
    "BannerImageUrl": "",
    "OrderNo": 0,
    "IsActive": true,
    "CreatedOn": "2023-07-16T14:23:22.255Z",
    "CreatedBy": 0
  }
  constructor(private http: HttpClient, private allservice: AllServiceService, private msgService: MessageService, private confirmService: ConfirmationService) {
    this.getBannerImage();
  }
  ngOnInit(): void {
    this.getBannerImage();
  }
  getBannerImage() {
    this.http.get("http://onlinetestapi.gerasim.in/api/Aqua/GetAllVenderBanners").subscribe((result: any) => {
      this.BannerList = result.data;
    })
  }

  onAdd() {
    this.http.post("http://onlinetestapi.gerasim.in/api/Aqua/AddNewBanner", this.Bannerobj).subscribe((result: any) => {

      if (result.result) {
        this.msgService.add({ key: "bc", severity: 'success', summary: 'Success', detail: 'Added successfully', life: 1000 });
        //alert("Updated Successfully");
        this.getBannerImage();
      }
      else {
        this.msgService.add({ key: "bc", severity: 'error', summary: 'Not saved', detail: 'Delivery pincode not saved', life: 1000 });
        //alert(result.message)
      }
    })
  }

  onDelete(id: number) {
    // this.BannerList.splice(id - 0, 1)
    // const isYes = confirm("Are You Sure want To Delete");
    // if (isYes) {
    //   this.http.get("http://onlinetestapi.gerasim.in/api/Aqua/DeleteBannerById?id=" + id).subscribe((result: any) => {
    //     this.getBannerImage();

    //   })
    // }

    this.confirmService.confirm({
      message: "Are You Sure You want to delete?",
      accept:()=>{
        this.BannerList.splice(id - 0, 1)
          this.msgService.add({ key: "bc", severity: 'error', summary: 'Not saved', detail: 'Delivery pincode not updated', life: 1000 });
          this.http.get("http://onlinetestapi.gerasim.in/api/Aqua/DeleteBannerById?id=" + id).subscribe((result: any) => {
            this.getBannerImage();
          })
      }
    })
  }

  onChangeFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      this.http.post('https://storeapi.gerasim.in/api/Customer/Upload', formData).subscribe((res: any) => {
        this.Bannerobj.BannerImageUrl = res;
      })
    }
  }
}
