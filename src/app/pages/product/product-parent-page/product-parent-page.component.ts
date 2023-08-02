import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-parent-page',
  templateUrl: './product-parent-page.component.html',
  styleUrls: ['./product-parent-page.component.css']
})
export class ProductParentPageComponent {
  selectedTab:string="basic";
  productId: number = 0;

  constructor(private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe((result:any) => {
      // debugger;
      if(result.id) {
        this.productId = result.id;
      }
    })
  }

  chnageTab(tabName: string) {
    this.selectedTab = tabName;
  }
}
