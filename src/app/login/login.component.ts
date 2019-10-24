import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Validators.pattern('[7-9][0-9]{9}')
  login=new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
data;
error;
msgerr=false;
  constructor(private ht:HttpClient,private a:ServiceService,private r:Router) { }

  ngOnInit() {
   
    
  }

  onsubmit(){
    const body = new HttpParams()
 .set('username', this.login.value.username)
 .set('password', this.login.value.password);
    console.log(this.login.value)
this.ht.post("http://192.168.1.137:8087/rpo/rest/user/authenticate",body.toString(), {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }}).subscribe(resp=>{console.log(resp)
this.data=resp;
if(this.data.token=="Bad credentials"){
  this.msgerr=true;
}else{
  localStorage.setItem("token",this.data.token);
  if(this.data.user.role=='BDM'){
  this.r.navigate(['home'])}
  if(this.data.user.role=='ADMIN'){
  this.r.navigate(['home1'])}
  if(this.data.user.role=='AM'){
  this.r.navigate(['home2'])}
  if(this.data.user.role=='recruiter'){
  this.r.navigate(['home3'])}
}
});
}

}
