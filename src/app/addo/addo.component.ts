import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CusttypeService } from '../custtype.service';

@Component({
  selector: 'app-addo',
  templateUrl: './addo.component.html',
  styleUrls: ['./addo.component.css']
})
export class AddoComponent implements OnInit {

  status:boolean=false;
  val;
  
  save(obj){
  this.status=true;
  console.log(obj);
  this.s.cuadd(obj).subscribe(res=>{console.log(res)
 
  });
  this.m.navigate(['home/customer']);
  alert("success");
  }
  constructor(private m:Router,private s:CusttypeService) { }
  
  ngOnInit() {
  }
 mr(){
  this.m.navigate(['home/customer']);
 }

}
