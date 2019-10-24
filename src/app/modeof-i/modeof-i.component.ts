import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-modeof-i',
  templateUrl: './modeof-i.component.html',
  styleUrls: ['./modeof-i.component.css']
})
export class ModeofIComponent implements OnInit {

  p:number=1;
  t=false;
  name: any;
  show: any;
data;
id;
y;
k;
  totaldata
  data1: any;

ed(data1){
  this.t=true;
  this.data1=data1.modeofInterview;
}

  constructor(private b:Router,private ht:HttpClient,private pl:RegistrationService) { 
  }



  tabledata;
 ngOnInit() {

 this.tabledata = JSON.parse(localStorage.getItem('modeofInterview'));
 console.log("new",this.tabledata)

 }
add(){
  this.b.navigate(['home/modeSub'])

}
update(e) {
  console.log(e)
  this.data1 = e.modeofInterview;
  this.id = e.id
  }
  update1(e) {
     console.log(e)
    this.totaldata = {
    'id': this.id,
    'modeofInterview': e
    }
    this.pl.post(this.totaldata).subscribe(resp => console.log(resp))
    }
    
}








