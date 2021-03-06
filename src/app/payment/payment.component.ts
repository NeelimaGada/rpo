import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
 
@Component({
 selector: 'app-payment',
 templateUrl: './payment.component.html',
 styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
 
data;
 details;
 details1;
 data1;
 status=false;
 token;
 idvalue:any;
 show1: boolean=true;
 modelvalue: any;
constructor(private ht:HttpClient,private route:Router) { }
pageActual:number=1;
ngOnInit()
{
 this.token=localStorage.getItem("token");
 
 this.ht.get("http://192.168.1.137:8087/rpo/rest/PaymentTerms",{
headers:{
"X-Access-Token":this.token
}
 }).subscribe(resp=>{console.log(resp);
 this.data=resp;
this.details=this.data.result;
})
 
}
 
 addfn()
 {
 this.status=true;
 }
 
 savefn(input){
 console.log(input)
 this.status=false;
 this.ht.post("http://192.168.1.137:8087/rpo/rest/PaymentTerms",input,{
 headers:{
 "X-Access-Token":this.token
 }
 })
 .subscribe(resp=>{
 console.log(resp)
 if(resp)
 {
 this.ht.get("http://192.168.1.137:8087/rpo/rest/PaymentTerms",{
 headers:{
 "X-Access-Token":this.token
 }
 }).subscribe(resp=>{ console.log(resp); this.data=resp;
 this.details=this.data.result});
 }
 }) 
 }
 
id(i){
 
this.idvalue=i.id;
this.modelvalue = i.paymentType;
}
 
editfn(ud){
 
var val=ud;
 this.ht.post("http://192.168.1.137:8087/rpo/rest/PaymentTerms/"+this.idvalue,val,
 {
 headers:{
 "X-Access-Token":this.token
 }
 }).subscribe(resp=>{
 console.log(resp)
 if(resp)
 {
 this.ht.get("http://192.168.1.137:8087/rpo/rest/PaymentTerms/",
 {
 headers:{
 "X-Access-Token":this.token
 }
 }).subscribe(resp=>{
 console.log(resp); 
 this.data=resp;
 this.details=this.data.result
 });
 }
 window.alert("successfully updated");
 }
 )
 
 }




 
show(){
 this.show1=false;
 this.route.navigate(['home/list']);
}

}