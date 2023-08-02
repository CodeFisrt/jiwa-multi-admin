import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductArray } from 'src/app/core/interfaces/product';
import { SpecificationArray, SpecificationObjArray } from 'src/app/core/interfaces/specification';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent implements OnInit {
  showFirstDiv:Boolean = true;
  showSecondDiv:Boolean = false;
  specificationAvialable: Boolean = false;
  @Input() productId: number = 0;
  editMode: boolean = false;

  specificationArray: SpecificationArray[] = [];
  specification: SpecificationObjArray[] = [{
    productSpecificationId: 0,
    productId: 0,
    specificationKey: "",
    specificationValue: "" ,
    isActive: false
  }];


  constructor(private productSrv: ProductService, private router: Router) { }

   reset() {
   }

  ngOnInit(): void {
    // this.getproductList();
    this.getSpecification();
    // this.specification[0].productId = this.productId; // Set the productId here
    // this.specification = [{
    //   "productSpecificationId": 0,
    //   "productId": this.productId,
    //   "specificationKey": "",
    //   "specificationValue": "",
    //   "isActive": false
    // }];
    // this.getSpecification(this.SpecificationObjArray[0].productId);

    // if(this.productId) {
    //   this.getSpecification(this.productId);
    // }        
  }

  getSpecification() {
    this.productSrv.GetSpecificationByProductId(this.productId).subscribe(
      (response: any) => {
        if (response.result == true) {
          if (response.data && response.data.length > 0) {
            this.specification = response.data;
            this.specificationAvialable = true;
          } else {
            this.specificationAvialable = false;
          }
        } else {
          alert(response.message);
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
  }


  createSpecification() {
    this.productSrv.createSpecification(this.specification).subscribe((response: any) => {
      if (response.result === true) {
        alert("Specification saved successfully");
        this.getSpecification();
      } else {
        alert(response.message);
      }
    });
  }
  updateSpecification() {
    this.productSrv.updateSpecification(this.specificationArray).subscribe(
      (response: any) => {
        if (response.length > 0) {
          alert('Specification updated successfully');
        } else {
          alert('Failed to update specification');
        }
      },
      (error: any) => {
        alert('An error occurred while updating the specification');
      }
    );
  }

  deleteSpecification(id:number) {
    const isConfirm = confirm("Are you want to delete");
    if (isConfirm) {
      this.productSrv.deleteSpecification(id).subscribe((response:any) => {
        if (response.result) {
          alert("Specification deleted successfully")
          this.getSpecification();
          // this.getproductList();
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
