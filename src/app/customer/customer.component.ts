import { Component, OnInit } from '@angular/core';
import { CusttypeService } from '../custtype.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  amount;
 constructor(private r:Router,private s:CusttypeService) { }
 token;
 tabledata;
 id;
 cusget;
 hold;
 modalobj;
 ngOnInit() {
 this.token=localStorage.getItem('token');
 this.s.cusget(this.token).subscribe(res=>{console.log(res)
 this.hold=res;
 this.tabledata=this.hold.result;
 })
 }
 her;
 fn(){
 this.r.navigate(["home/addo"]);
 }
 modelmethod(e){
 console.log(e);
 this.amount=e.amount;
 this.her=e;
 this.id = e.id;
 }
 uppit(e){
 console.log(e);
 this.modalobj={'id':this.id,'amount':e,'commissionRate':this.her.commissionRate,'customerType':this.her.customerType,'dropdown1':this.her.dropdown1,'dropdown2':this.her.dropdown2}
 console.log(this.modalobj);
 this.s.fdit(this.modalobj).subscribe(res=>console.log(res));
 location.reload();
 }

}
