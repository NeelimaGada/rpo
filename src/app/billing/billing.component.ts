import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  arr: Object;

  constructor(private p: ServiceService,private ht:HttpClient) { 

  }
  tabledata;

  ngOnInit() {
    this.tabledata = JSON.parse(localStorage.getItem('billing'));
    console.log("new",this.tabledata)
  }
  stat = false
  dataa
  id
  totaldata
  add2() {
    this.stat = true;
  }
  add3(a){
    this.stat=false
    console.log(a);
    localStorage.getItem('token')
     this.p.add1(a).subscribe(resp=>console.log(resp))
     alert("Successfully added")
  }
  update(e) {
    console.log(e)
    this.dataa = e.billingModel;  
    this.id = e.id
  }
 
  update1(e) {
    this.totaldata = {
      'id': this.id,
      'billingModel': e
    }
    this.p.post(this.totaldata).subscribe(resp => console.log(resp))
  }


  id1
  delete(e){
    console.log(e)
    this.id1=e.id
    console.log(this.id1)
     this.p.del(this.id1).subscribe(resp=>console.log(resp))
  }
}
