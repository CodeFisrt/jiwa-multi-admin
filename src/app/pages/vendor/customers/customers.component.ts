import { Component } from '@angular/core';
import { MasterServiceService } from 'src/app/service/master-service.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {

  constructor(private service : MasterServiceService){}

  customerArray : any[] = [];

  customerObj : any = [];
  customerAddObj : any[]=[]; 
  
  formClose :boolean = false;
  table : boolean = true;
  tableWidth : string = 'col-12';

  formWidth : string = 'col-0';
  font:string = '16px';
  fontWeight : number = 700;

  ngOnInit(){
    this.getAllCustomer();
  }
 
  getAllCustomer(){
    this.service.loadAllCustomer().subscribe((res:any)=>{
      this.customerArray = res.data;
      console.log(this.customerArray);
    })
  }


  OnOpen(id:number){
   this.formWidth='col-6';
   this.tableWidth = 'col-5';

   this.font = '12px';
   this.fontWeight = 400;
   
   this.table = true;
   this.formClose = true;
    this.service.loadCustomerById(id).subscribe((res1:any)=>{
      this.customerObj = res1.data;
    });
    this.service.loadCustomerAddressById(id).subscribe((res2:any)=>{
      this.customerAddObj = res2.data;
    });

  }

  onClose(){
    this.formWidth='col-0';
    this.tableWidth = 'col-12';
    this.table = true;
    this.formClose = false;
    this.font = '16px';
  }
  


}
