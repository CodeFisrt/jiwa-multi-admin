import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent {

  cardArray: any[] = [];

  constructor(private http: HttpClient) {
    this.loadCart();
  }

  loadCart() {
    this.http.get("http://onlinetestapi.gerasim.in/api/Aqua/GetAllCartItems").subscribe((res: any) => {
      this.cardArray = res.data;
    })
  }
}
