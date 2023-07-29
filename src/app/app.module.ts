import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


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


import { ProductreviewComponent } from './pages/product/productreview/productreview.component';
import { ProductFormComponent } from './pages/product/product-form/product-form.component';
import { ProductParentPageComponent } from './pages/product/product-parent-page/product-parent-page.component';
import { ProductpagesComponent } from './pages/product/productpages/productpages.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AngularEditorModule } from '@kolkov/angular-editor';


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
    ProductFormComponent,
    VendorlistComponent,
    VendorBannerComponent,
    DashboardComponent,
    ProductListComponent,
    ProductreviewComponent,
    ProductFormComponent,
    ProductreviewComponent,
    ProductParentPageComponent,
    ProductpagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastModule,
    BrowserAnimationsModule,
    ButtonModule,
    ConfirmDialogModule,
    AngularEditorModule,
  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule { }
