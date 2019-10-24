import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tt9: string;
  arr1: any;
  data9: any;

  constructor(private rout:Router, private ki:RegistrationService) { }

  ngOnInit() {
    
    this.tt9=localStorage.getItem('token')
 console.log(this.tt9)
 this.ki.get(this.tt9).subscribe(re=>{console.log(re)
 this.arr1=re
 this.data9=this.arr1.result
 localStorage.setItem('modeofInterview', JSON.stringify(this.data9));
 });

  }

}
