import { Component } from '@angular/core';
import { OrderObj } from 'src/app/core/classes/order-obj';
import { Order } from 'src/app/core/interfaces/order';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orderArray: Order[] = [];
  orderObj: OrderObj = new OrderObj();
  isloader = false;
  headerColor: boolean = true;
  showFirstDiv = true;
  showSecondDiv = false;
  public orderProductsAvailable: boolean = true; // Flag to track order products availability
  public shippingDataAvailable: boolean = true; // Flag to track shipping data availability



  constructor(private orderSrv: OrderService) { }
  ngOnInit(): void {
    this.loadOrders();
  }

  editVendor(orderId: number) {
    this.orderSrv.getOrderByOrderId(orderId).subscribe((response: any) => {
      if (response.result == true) {
        this.orderObj = response.data;
        // Check if order products data is available
        if (this.orderObj.jiwaVendorOrderProducts.length == 0) {
          this.orderProductsAvailable = false; // Set flag to indicate no data
        } else {
          this.orderProductsAvailable = true;
        }
        // Check if shipping address data is available
        if (this.orderObj.shippingAddress) {
          this.shippingDataAvailable = true;
        } else {
          this.shippingDataAvailable = false; // Set flag to indicate no data
        }
      } else {
        alert(response.message);
      }
    });
  }


  loadOrders() {
    this.orderSrv.getAllOrders().subscribe((response: any) => {
      if (response.result == true) {
        this.orderArray = response.data
        // alert("")
      } else {
        alert(response.message);
      }
    })
  }


  toggleDivs() {
    this.showFirstDiv = !this.showFirstDiv;
    this.showSecondDiv = !this.showSecondDiv;
  }

  goBack() {
    this.showFirstDiv = true;
    this.showSecondDiv = false;
  }
}
