import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-productreview',
  templateUrl: './productreview.component.html',
  styleUrls: ['./productreview.component.css']
})
export class ProductreviewComponent {
  isFirstDiv: boolean = true;
  istableloader:boolean=false;
  isapicalload:boolean=false;
  isSecondDivVisible: boolean = true;
  customerArray: any[] = [];
  vendorArray: any[] = [];
  productArray: any[] = [];
  userObj: any = {
    productId: 0,
    customerId: 0,
    createdDate: '',
    reviewTitle: '',
    review: '',
    productRating: 0,
    showOnWebsite: true
  };

  constructor(private http: HttpClient) {
    this.loadCustomer();
    this.loadProductReview();
    this.getAllProducts();
  }

  loadProductReview() {
    this.istableloader=true;
    this.http.get("http://onlinetestapi.gerasim.in/api/Aqua/GetProductReviewsByProductId").subscribe((res: any) => {
      this.vendorArray = res.data;
      setTimeout(()=>{
        this.istableloader=false;
            },2000);

    });
  }

  loadCustomer() {
    this.http.get("http://onlinetestapi.gerasim.in/api/Aqua/GetAllCustomers").subscribe((res: any) => {
      this.customerArray = res.data;
    });
  }

  getAllProducts() {
    this.http.get("http://onlinetestapi.gerasim.in/api/Aqua/GetAllProduct").subscribe((res: any) => {
      this.productArray = res.data;
    });
  }

  onSaveUser() {
    if(!this.isapicalload){
      this.isapicalload=true;
    this.http.post("http://onlinetestapi.gerasim.in/api/Aqua/AddProductReview", this.userObj).subscribe((res: any) => {
      this.isapicalload=false;
    if (res.result) {
        alert("Product review added successfully");
        this.loadProductReview(); // Reload reviews after adding a new one

      } else {
        alert(res.message);
      }
    });
  }
  }
  addClasses() {
    this.isFirstDiv = true;
    this.isSecondDivVisible = true;
  }

  removeClasses() {
    this.isFirstDiv = true;
    this.isSecondDivVisible = false;
    this.resetForm(); // Hide the form and reset its values when closing
  }

  resetForm() {
    this.userObj = {
      productId: 0,
      customerId: 0,
      createdDate: '',
      reviewTitle: '',
      review: '',
      productRating: 0,
      showOnWebsite: true
    };
  }
}
