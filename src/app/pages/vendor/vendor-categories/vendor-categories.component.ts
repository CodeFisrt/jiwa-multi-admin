import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AllServiceService } from 'src/app/service/all-service.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-categories',
  templateUrl: './vendor-categories.component.html',
  styleUrls: ['./vendor-categories.component.css']

})
export class VendorCategoriesComponent {
  isFirstDiv: boolean = true;
  isSecondDivVisible: boolean = true;
  categoryArray: any[] = [];
  categoryObj: any = {
    categoryId: 0,
    vendorId: 0,
    parentCategoryId: 0,
    categoryName: '',
    bannerImage: '',
    isActive: false,
    categoryDescription: '',
    createdOn: '',
    createdBy: 0,
    thumbnailImage: '',
    pagespinnger: true,
    cardview: true,
    cardviewtoggle: false,
    cardmsg: true,
  };
  onReset() {
    this.categoryObj = {
      categoryId: 0,
      vendorId: 0,
      parentCategoryId: 0,
      categoryName: '',
      bannerImage: '',
      isActive: false,
      categoryDescription: '',
      createdOn: '',
      createdBy: 0,
      thumbnailImage: '',
    };
  }
  cardmsg: boolean = false;
  cardviewtoggle: boolean = false;
  cardview: boolean = true;
  pagespinnger: boolean = false;

  constructor(private http: HttpClient, private router: Router, private allservice: AllServiceService, private msgService: MessageService, private confirmService: ConfirmationService) {
    this.getcategory();
  }

  cardtoggle() {
    this.cardview = !this.cardview;
    this.cardviewtoggle = !this.cardview;
    this.cardmsg = !this.cardmsg;
  }

  onChangeFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      this.http
        .post('https://storeapi.gerasim.in/api/Customer/Upload', formData)
        .subscribe((res: any) => {
          this.categoryObj.bannerImage = res;
        });
    }
  }
  getcategory() {
    this.pagespinnger = true;
    this.http
      .get('http://onlinetestapi.gerasim.in/api/Aqua/GetAllCategory')
      .subscribe((result: any) => {
        this.categoryArray = result.data;
        setTimeout(() => {
          this.pagespinnger = false;
        }, 2000);
      });
  }
  onSavecategory() {
    this.http
      .post(
        'http://onlinetestapi.gerasim.in/api/Aqua/CreateCategory',
        this.categoryObj
      )
      .subscribe((Res: any) => {
        if (Res.result) {
          this.msgService.add({ key: "bc", severity: 'success', summary: 'Success', detail: 'Category saved successfully', life: 1000 });
          // alert('Category Saved Success');
          this.getcategory();
        } else {
          this.msgService.add({ key: "bc", severity: 'error', summary: 'Not saved', detail: 'Category not saved', life: 1000 });
          //alert(Res.message);
        }
      });
  }
  editCategory(id: number) {
    this.http
      .get('http://onlinetestapi.gerasim.in/api/Aqua/GetCategoryById?id=' + id)
      .subscribe((res: any) => {
        this.categoryObj = res.data;
      });
  }

  updateCategory() {
    this.http
      .post(
        'http://onlinetestapi.gerasim.in/api/Aqua/UpdateCategory',
        this.categoryObj
      )
      .subscribe((Res: any) => {
        if (Res.result) {
          this.msgService.add({ key: "bc", severity: 'success', summary: 'Success', detail: 'Category updated successfully', life: 1000 });
          //alert('Category Update Success');
          this.getcategory();
        } else {
          this.msgService.add({ key: "bc", severity: 'error', summary: 'Not saved', detail: 'Category not updated', life: 1000 });
          // alert(Res.message);
        }
      });
  }
  deleteCategory(id: number) {
    const isConfirm = confirm('Are you want to delete');
    if (isConfirm) {
      this.http.get('http://onlinetestapi.gerasim.in/api/Aqua/DeleteCategoryById?id=' + id, {}).subscribe((Res: any) => {
        if (Res.result) {
          alert('Category deleted Success');
          this.getcategory();
        } else {
          alert(Res.message);
        }
      });
    }
  }

  /*  addClasses() {
    this.isFirstDiv = true;
    this.isSecondDivVisible = true;
  }
  removeClasses() {
    this.isFirstDiv = true;
    this.isSecondDivVisible = false;
  }
  */
  /*  public show: boolean = false;
  public buttonName: any = 'Show';

  ngOnInit() {}

  toggle() {
    this.show = !this.show;

    // Change the name of the button.
    if (this.show) this.buttonName = 'Hide';
    else this.buttonName = 'Show';
  } */
}
