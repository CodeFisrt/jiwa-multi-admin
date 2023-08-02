import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent {

  cardArray: any[] = [];
  pagespinnger: boolean = false;

  constructor(private http: HttpClient) {
    this.loadCart();
  }

  loadCart() {
    this.pagespinnger = true;
    this.http.get("http://onlinetestapi.gerasim.in/api/Aqua/GetAllCartItems").subscribe((res: any) => {
      this.cardArray = res.data;
      setTimeout(() => {
        this.pagespinnger = false;
      }, 2000);
    });
  }
}
