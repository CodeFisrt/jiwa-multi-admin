import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj: any = {
    "UserName": "",
    "UserPassword": ""
  };

  loader: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
  }

  checkLoginDetails() {
    this.loader = true;
    this.http.post("https://onlinetestapi.gerasim.in/api/Aqua/VendorLogin", this.loginObj).subscribe((res: any) => {
      if (res.result) {
        localStorage.setItem('account', JSON.stringify(this.loginObj));
        this.loader = false;
        this.router.navigateByUrl('dashboard');
      }
      else {
        alert(res.message);
        this.loader = false;
      }

    });

  }

  validateField(item: any) {
    if (item != '') {
      return false;
    } else {
      return true;
    }
  }
}
