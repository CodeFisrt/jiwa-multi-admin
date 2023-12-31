import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllServiceService } from 'src/app/service/all-service.service';

import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  isFirstDiv: boolean = true;
  isSecondDivVisible: boolean = true;
  isapicalload: boolean = false;
  vendorArray: any[] = [];
  userArray: any[] = [];
  userObj: any = {
    "jiwaUserId": 0,
    "vendorId": 0,
    "userRole": "",
    "userName": "",
    "password": "",
    "createdOn": new Date(),
    "createdBy": 0
  }
  onReset() {
    this.userObj = {
      "jiwaUserId": 0,
      "vendorId": 0,
      "userRole": "",
      "userName": "",
      "password": "",
      "createdOn": "",
      "createdBy": 0
    }
  }
  constructor(private http: HttpClient, private router: Router, private allservice: AllServiceService, private msgService: MessageService, private confirmService: ConfirmationService) {
    this.getAllUsers();
    this.loadAllVendor();
  }
  loadAllVendor() {
    this.http.get("http://onlinetestapi.gerasim.in/api/Aqua/GetAllVendors").subscribe((res: any) => {
      this.vendorArray = res.data;
    })
  }
  getAllUsers() {
    this.http.get("http://onlinetestapi.gerasim.in/api/Aqua/GetAllUsers").subscribe((res: any) => {
      this.userArray = res.data;
    })
  }

  edituser(userObj: any) {
    this.userObj = userObj;
  }

  userdelete(id: number) {
    // const isConfirm = confirm("Are you want to delete");
    // if (isConfirm) {
    //   this.http.get("http://onlinetestapi.gerasim.in/api/Aqua/DeleteUserById?userid=" + id).subscribe((res: any) => {
    //     if (res.result) {
    //       alert("user delete succcessfully");
    //       this.getAllUsers();
    //     } else {
    //       alert(res.message)
    //     }
    //   })
    // }
    this.confirmService.confirm({
      message: "Are You Sure You want to delete?",
      accept:()=>{
        this.msgService.add({ key: "bc", severity: 'error', summary: 'Not saved', detail: 'Delivery pincode not updated', life: 1000 });
        this.http.get("http://onlinetestapi.gerasim.in/api/Aqua/DeleteUserById?userid=" +id).subscribe((res:any)=>{
          this.getAllUsers();
        })
      }
      
    })
  }

  updateuser() {
    this.http.post('http://onlinetestapi.gerasim.in/api/Aqua/UpdateVendorUser', this.userObj).subscribe((res: any) => {
      if (res.result) {
        this.msgService.add({ key: "bc", severity: 'success', summary: 'Success', detail: 'User updated successfully', life: 1000 });
        //alert("user updated successfully");
        this.getAllUsers();
      } else {
        this.msgService.add({ key: "bc", severity: 'error', summary: 'Not updated', detail: 'User not updated', life: 1000 });
        //alert(res.message)
      }
    });
  }
  onsaveUser() {
    if (!this.isapicalload) {
      this.isapicalload = true;
      this.http.post("http://onlinetestapi.gerasim.in/api/Aqua/CreateVendorUser", this.userObj).subscribe((res: any) => {
        this.isapicalload = false;
        if (res.result) {
          this.msgService.add({ key: "bc", severity: 'success', summary: 'Success', detail: 'User created successfully', life: 1000 });
          //alert("user created successfully");
          this.getAllUsers();
        } else {
          this.msgService.add({ key: "bc", severity: 'error', summary: 'Not updated', detail: 'User not created', life: 1000 });
          //alert(res.message)
        }

      })
    }
  }
  addClasses() {
    this.isFirstDiv = true;
    this.isSecondDivVisible = true;
  }

  removeClasses() {
    this.isFirstDiv = true;
    this.isSecondDivVisible = false;
  }
}
