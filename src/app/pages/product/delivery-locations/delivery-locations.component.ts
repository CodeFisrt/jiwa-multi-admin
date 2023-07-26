import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryLocObjArrayData, DeliveryLocationCreateArray } from 'src/app/core/interfaces/deliverLocation';
import { ProductArray } from 'src/app/core/interfaces/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-delivery-locations',
  templateUrl: './delivery-locations.component.html',
  styleUrls: ['./delivery-locations.component.css'],
})
export class DeliveryLocationsComponent {

  headerColor: boolean = true;
  showFirstDiv = true;
  showSecondDiv = false;
  deliveryLocationsAvailable = false;
  deliveryLocations: DeliveryLocObjArrayData[] = [];
  ProductArray: ProductArray[] = [];
  deliveryObjarray: DeliveryLocationCreateArray[] = [{
    deliveryLocationId: 0,
    productId: 0,
    pinCode: ''
  }];


  constructor(private productSrv: ProductService, private router: Router) { }
  ngOnInit(): void {
    this.getproductList();

    //  this.getDeliveryLocations(this.deliveryObjarray[0].productId);
  }

  getproductList() {
    // debugger;
    this.productSrv.getAllProducts().subscribe((response: any) => {
      if (response.result == true) {
            this.ProductArray = response.data

      } else {
        alert(response.message);
      }
    });

  }

  getDeliveryLocations(productId: number) {
    this.productSrv.GetDeliveryLocationsByProductId(productId).subscribe((response: any) => {
      if (response.result == true) {
        if(response.data != 0) {
          this.deliveryLocations = response.data;
          this.deliveryLocationsAvailable = true; // Set the flag to true when locations are available
          this.showSecondDiv = true;
          this.showFirstDiv = false;
        } else
        {
          alert("Delivery locations not available for this product")
          this.deliveryLocationsAvailable = false; // Set the flag to true when locations are available
        }
        // this.router.navigateByUrl('/deliveryLocationList')
      } else {
        alert(response.message);
      }
    })
  }

  createDeliveryLocation() {
    // debugger;
    const newDeliveryLocation = this.deliveryObjarray[0];
    if (newDeliveryLocation.deliveryLocationId === 0) {
      this.productSrv.createdelverlyLocation([newDeliveryLocation]).subscribe((response: any) => {
        if (response.result === true) {
          alert("Delivery pincode saved successfully");
          // this.getDeliveryLocations(this.deliveryObjarray[0].productId);
          this.getproductList();
        } else {
          alert(response.message);
        }
      });
    }
  }


  updateDeliveryLocation() {
    // debugger;
    // const updatedDeliveryLocation = this.deliveryObjarray[0];
    this.productSrv.updateDeliveryLocation(this.deliveryLocations).subscribe(
      (response: any) => {
        if (response.result === true) {
          alert("Delivery pincode updated successfully");
          this.showFirstDiv = true;
          this.showSecondDiv = false;
          // this.getDeliveryLocations(this.deliveryObjarray[0].productId);

          // this.getDeliveryLocations(updatedDeliveryLocation.productId);
        } else {
          alert(response.message);
        }
      },
      (error: any) => {
        console.error("Failed to update delivery location", error);
      }
    );

  }

  deleteDeliveryLocation(id: number) {
    const isConfirm = confirm("Are you want to delete");
    if (isConfirm) {
      this.productSrv.deleteDeliveryLocation(id).subscribe((response: any) => {
        if (response.result) {
          alert("DeliveryLocation deleted successfully")
          this.getDeliveryLocations(this.deliveryObjarray[0].productId);
          this.getproductList();
        } else {
          alert(response.message);
        }
      })
    }
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
