import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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


@NgModule({
  declarations: [

  
    LoginComponent,
         LayoutComponent,
         UsersComponent,
         VendorRegistrationsComponent,
         VendorCategoriesComponent,
         CartItemsComponent,
         OrdersComponent,
         WishlistComponent,
         CustomersComponent,
         ProductListComponent,
         BasicDetailsComponent,
         SpecificationComponent,
         VarientsComponent,
         OffersComponent,
         DeliveryLocationsComponent,
         ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
