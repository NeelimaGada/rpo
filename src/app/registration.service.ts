import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor,HttpHeaders, HttpParams } from '@angular/common/http';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService  {

  constructor(private ht:HttpClient) {

   }
   sendData(a){
    const body = new HttpParams()
 .set('username', a.username)
 .set('password', a.password);
   return this.ht.post("http://192.168.1.137:8087/rpo/rest/user/authenticate", body.toString(),
  {
  headers: new HttpHeaders()
  .set('Content-Type', 'application/form-data')
  }
  )
   }
   token1;
  
   getItem(){
     return localStorage.getItem('token');
   }
   
   get(e){
    return this.ht.get("http://192.168.1.137:8087/rpo/rest/modeofInterview",{
    headers:{
    'X-Access-Token':e,
    'Content-Type':'application/json'
    }
    });
   } 
   post(a) {
    this.token1 = localStorage.getItem('token')
    return this.ht.post("http://192.168.1.137:8087/rpo/rest/modeofInterview/"+a.id,a,
    {
    headers: {
    'X-Access-Token': this.token1,
    'Content-Type': 'application/json'
    }
    }
    )
    }
  add(b) {
      this.token1 = localStorage.getItem('token');
      
      return this.ht.post("http://192.168.1.137:8087/rpo/rest/modeofInterview/",b,
      {
      headers: {
      'X-Access-Token': this.token1,
      'Content-Type': 'application/json'
      }
      }
      )
      
      }
    
 
}