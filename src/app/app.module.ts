import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { BasicDetailsComponent } from './pages/product/basic-details/basic-details.component';
import { SpecificationComponent } from './pages/product/specification/specification.component';
import { VarientsComponent } from './pages/product/varients/varients.component';
import { OffersComponent } from './pages/product/offers/offers.component';
import { DeliveryLocationsComponent } from './pages/product/delivery-locations/delivery-locations.component';
import { ReviewComponent } from './pages/product/review/review.component';
import { VendorlistComponent } from './pages/vendor/vendorlist/vendorlist.component';
import { VendorBannerComponent } from './pages/vendor/vendor-banner/vendor-banner.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
<<<<<<< HEAD
import { ProductreviewComponent } from './pages/product/productreview/productreview.component';
=======
import { ProductFormComponent } from './pages/product/product-form/product-form.component';
>>>>>>> 4a7533d2f5f762c9e87cebe298700f3f7241f2ea

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    UsersComponent,
    VendorRegistrationsComponent,
    VendorCategoriesComponent,
    CartItemsComponent,
    OrdersComponent,
    WishlistComponent,
    CustomersComponent,
    BasicDetailsComponent,
    SpecificationComponent,
    VarientsComponent,
    OffersComponent,
    DeliveryLocationsComponent,
    ReviewComponent,
    VendorlistComponent,
    VendorBannerComponent,
    DashboardComponent,
    ProductListComponent,
<<<<<<< HEAD
    ProductreviewComponent,
=======
    ProductFormComponent,
>>>>>>> 4a7533d2f5f762c9e87cebe298700f3f7241f2ea
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
