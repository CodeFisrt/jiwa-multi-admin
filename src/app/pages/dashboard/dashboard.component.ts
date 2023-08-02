import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  adminDashList: any[] = [];
  isTableLoder: boolean = false;
  Vendor :boolean = false;

  constructor(private http: HttpClient) {
this.getAdminDashboard();
  }

  getAdminDashboard() {
    this.isTableLoder = true;
    const allorderList = localStorage.getItem('loginArray') ?? '{}';
    const id = JSON.parse(allorderList);
    this.http.get("https://onlinetestapi.gerasim.in/api/Aqua/getAdminDashboardData").subscribe((res: any) => {
      this.adminDashList = res.data;

    })
  }

  getVenderDahboard() {
    this.isTableLoder = true;
    const dashbord = localStorage.getItem('loginArray') ?? '{}';
    const id = JSON.parse(dashbord);





  }
}
