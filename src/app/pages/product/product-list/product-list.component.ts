import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AllServiceService } from 'src/app/service/all-service.service';

import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  myproduct: any[] = [];
  pagespinnger: boolean = true;
  cardview: boolean = true;
  cardviewtoggle: boolean = false;
  cardmsg: boolean = true;
  constructor(private http: HttpClient,
     private allservice: AllServiceService, 
     private msgService: MessageService, 
     private confirmService: ConfirmationService,
     private router: Router) {
    this.getallproduct();
  }

  cardtoggle() {
    this.cardview = !this.cardview;
    this.cardviewtoggle = !this.cardview;
    this.cardmsg = !this.cardmsg;
  }
  getallproduct() {
    this.pagespinnger = true;
    this.http
      .get('http://onlinetestapi.gerasim.in/api/Aqua/GetAllProduct')
      .subscribe((res: any) => {
        this.myproduct = res.data;
        setTimeout(() => {
          1
          this.pagespinnger = false;
        }, 500);
      });
  }

  editProduct(id: number) {
    this.router.navigate(['/editProduct', id]);
  }
}
