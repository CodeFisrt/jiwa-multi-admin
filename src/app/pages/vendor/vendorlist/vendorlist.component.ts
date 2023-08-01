import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VendorslistService } from 'src/app/core/services/vendorlist/vendorslist.service';
import { NgForm } from '@angular/forms';
import { AllServiceService } from 'src/app/service/all-service.service';
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.css'],
})
export class VendorlistComponent {
  isFirstDiv: boolean = true;
  isSecondDivVisible: boolean = false;
  istableloader: boolean = true;
  isloader: boolean = true;
  isapicalload: boolean = false;


  vendorarray: any[] = [];
  vendorobj: any = {
    vendorId: 0,
    vendorName: '',
    primaryContactNo: '',
    facebookUrl: '',
    instagramUrl: '',
    supportEmailId: '',
    secondaryContactNo: '',
    emailId: '',
    ownerName: '',
    gSTNo: '',
    ownerPanCardNo: '',
    businessPanNo: '',
    logo: '',
    aboutUs: '',
    address1: '',
    address2: '',
    city: '',
    pinCode: '',
    officeName: '',
    state: '',
  };
  productSrv: any;
  constructor(private http: HttpClient, private vendor: VendorslistService, private msgService: MessageService, private confirmService: ConfirmationService,private allservice: AllServiceService) {
    this.getvendors();
  }
  getvendors() {
    this.istableloader = true;
    this.vendor.loaduser().subscribe((res: any) => {
      this.vendorarray = res.data;

      setTimeout(() => {
        this.istableloader = false;
      }, 1000);
    });
  }
  onSavevendors() {
    if (!this.isapicalload) {
      this.isapicalload = true;
      this.vendor.saveData(this.vendorobj).subscribe((Res: any) => {
        this.isapicalload = false;
        if (Res.result) {
          this.msgService.add({ key: "bc", severity: 'success', summary: 'Success', detail: 'Vendor information Saved successfully', life: 1000 });
          //alert('vendors Saved Successfully');
          this.getvendors();
        } else {
          this.msgService.add({ key: "bc", severity: 'error', summary: 'Not saved', detail: 'Vendor information not saved', life: 1000 });
          //alert(Res.message);
        }
      });
    }
  }
  editvendor(id: number) {
    this.vendor.editData(id).subscribe((res: any) => {
      this.vendorobj = res.data;
    });
    this.isSecondDivVisible = true;
    this.isFirstDiv = false;
  }
  onupdatevendors() {
    this.vendor.updateData(this.vendorobj).subscribe((Res: any) => {
      if (Res.result) {
        this.msgService.add({ key: "bc", severity: 'success', summary: 'Success', detail: 'Vendor Information updated successfully', life: 1000 });
        //alert('vendors updated Successfully');
        this.getvendors();
      } else {
        this.msgService.add({ key: "bc", severity: 'error', summary: 'Not updated', detail: 'Vendor information not updated', life: 1000 });
        //alert(Res.message);
      }
    });
    this.isSecondDivVisible = false;
    this.isFirstDiv = true;

  }
  vendordelete(id: number) {
    // const isConfirm = confirm('Are you want to delete');
    // if (isConfirm) {
    //   this.vendor.deleteData(id).subscribe((Res: any) => {
    //     if (Res.result) {
    //       alert('vendors  deleted Successfully');
    //       this.getvendors();
    //     } else {
    //       alert(Res.message);
    //     }
    //   });
    // }
    this.confirmService.confirm({
      message: "Are You Sure You want to delete?",
      accept:()=>{
        this.vendor.deleteData(id).subscribe((Res: any) => {
             if(Res.result){
              this.msgService.add({ key: "bc", severity: 'success', summary: 'Success', detail: 'Delivery pincode deleted successfully', life: 1000 });
              this.getvendors();
             }
             else{
              this.msgService.add({ key: "bc", severity: 'error', summary: 'Not saved', detail: 'Delivery pincode not updated', life: 1000 });

             }
            });
      }
    })
  }
  reset(){
    this.vendorobj = {
      vendorId: 0,
      vendorName: '',
      primaryContactNo: '',
      facebookUrl: '',
      instagramUrl: '',
      supportEmailId: '',
      secondaryContactNo: '',
      emailId: '',
      ownerName: '',
      gSTNo: '',
      ownerPanCardNo: '',
      businessPanNo: '',
      logo: '',
      aboutUs: '',
      address1: '',
      address2: '',
      city: '',
      pinCode: '',
      officeName: '',
      state: '',
    }
  }
}

