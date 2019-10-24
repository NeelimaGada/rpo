import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-mode-sub',
  templateUrl: './mode-sub.component.html',
  styleUrls: ['./mode-sub.component.css']
})
export class ModeSubComponent implements OnInit {

data;
id;
totaldata;

  constructor(private q:Router,private hx:HttpClient,private hl:RegistrationService) { 
  }
  ngOnInit() {


  }
save(obj){

  console.log(obj);
  this.hl.add(obj).subscribe(res=>console.log(res));
  this.q.navigate(['home/moi']);


}


}




