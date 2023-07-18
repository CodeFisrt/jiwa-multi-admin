import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { UsersComponent } from './pages/users/users.component';
import { VendorRegistrationsComponent } from './pages/vendor/vendor-registrations/vendor-registrations.component';
import { VendorCategoriesComponent } from './pages/vendor/vendor-categories/vendor-categories.component';
import { CartItemsComponent } from './pages/vendor/cart-items/cart-items.component';
import { OrdersComponent } from './pages/vendor/orders/orders.component';
import { WishlistComponent } from './pages/vendor/wishlist/wishlist.component';
import { CustomersComponent } from './pages/vendor/customers/customers.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { BasicDetailsComponent } from './pages/product/basic-details/basic-details.component';
import { SpecificationComponent } from './pages/product/specification/specification.component';
import { VarientsComponent } from './pages/product/varients/varients.component';
import { OffersComponent } from './pages/product/offers/offers.component';
import { DeliveryLocationsComponent } from './pages/product/delivery-locations/delivery-locations.component';
import { ReviewComponent } from './pages/product/review/review.component';
import { VendorBannerComponent } from './pages/vendor/vendor-banner/vendor-banner.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  // {
  //   path : "",
  //   redirectTo : "login",
  //   pathMatch : "full"
  // },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "users",
        component: UsersComponent
      },
      {
        path: "vendor-registrations",
        component: VendorRegistrationsComponent
      },
      {
        path: "vendor-categories",
        component: VendorCategoriesComponent
      },
      {
        path: "vendor-banner",
        component: VendorBannerComponent
      },
      {
        path: "cartItems",
        component: CartItemsComponent
      },
      {
        path: "cartItems",
        component: CartItemsComponent
      },
      {
        path: "orders",
        component: OrdersComponent
      },
      {
        path: "wishlist",
        component: WishlistComponent
      },
      {

        path: "productList",
        component: ProductListComponent
      },
      {
        path: "customers",
        component: CustomersComponent

      },
      {
        path: "productList",
        component: ProductListComponent
      },
      {
        path: "basicDetails",
        component: BasicDetailsComponent
      },
      {
        path: "specification",
        component: SpecificationComponent
      },
      {
        path: "varients",
        component: VarientsComponent
      },
      {
        path: "offers",
        component: OffersComponent
      },
      {

        path: "review",
        component: ReviewComponent
      },
      {
        path: "delivery-locations",
        component: DeliveryLocationsComponent
      },
      {
        path: "review",
        component: ReviewComponent
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
