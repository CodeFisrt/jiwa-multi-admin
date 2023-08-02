import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllServiceService } from 'src/app/service/all-service.service';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent {
  loginObj: any = {
    "UserName": "",
    "UserPassword": ""
  };

  loader: boolean = false;

  constructor(private http: HttpClient, private router: Router, private allservice: AllServiceService, private msgService: MessageService) {
  }

  ngOnInit(): void {
  }

  checkLoginDetails() {
    // debugger;
    this.loader = true;
    this.http.post("https://onlinetestapi.gerasim.in/api/Aqua/VendorLogin", this.loginObj).subscribe((res: any) => {
      if (res.result) {
        localStorage.setItem('account', JSON.stringify(this.loginObj));
        this.loader = false;
        this.router.navigateByUrl('dashboard');
        this.msgService.add({ key: "bc", severity: 'success', summary: 'Success', detail: 'Login Successfully', life: 2000 });
      }

      else {
        this.msgService.add({ key: "bc", severity: 'error', summary: 'Incorrect', detail: 'Incorrect Username & Password', life: 2000 });
        this.loader = false;
      }

    });

  }

  // show() {
  //   this.msgService.add({ key: 'bc', severity: 'success', summary: 'Success', detail: 'Message Content', life: 1500 });
  // }

  validateField(item: any) {
    if (item != '') {
      return false;
    } else {
      return true;
    }
  }
}
