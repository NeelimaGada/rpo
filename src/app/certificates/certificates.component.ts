import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  data:any;
  modelvalue;
  name: string;
  status=false;
 public details: Object;
 msg: string;
 idvalue: any;
  token;
 constructor(private ht:HttpClient) { }
 pageActual:number=1;
 ngOnInit()
 {
  this.token=localStorage.getItem("token")
  this.ht.get("http://192.168.1.137:8087/rpo/rest/certificates",{
  headers:{
  "X-Access-Token":this.token
  }
  }).subscribe(resp=>{console.log(resp)
  this.data=resp;
  this.details=this.data.result
  })
 }
  edit(){
  this.name=window.prompt("Edit service model");
  }
 addfn(){
 this.status=true;
  }
 savefn(input){
  console.log(input)
 this.status=false;
 this.ht.post("http://192.168.1.137:8087/rpo/rest/certificates",input,{
  headers:{
  "X-Access-Token":this.token
  }
 })
 .subscribe(resp=>{
  console.log(resp)
  if(resp)
  {
  this.ht.get("http://192.168.1.137:8087/rpo/rest/certificates",{
  headers:{
  "X-Access-Token":this.token
  }
  }).subscribe(resp=>{ console.log(resp); this.data=resp;
  this.details=this.data.result});
  }
  }) 
 }
 modl;
 editfn(ud){
  this.modl={
  "id":this.idvalue,
  "certificationName":ud.certificationName
  }
 var val=ud;
  this.ht.post("http://192.168.1.137:8087/rpo/rest/certificates/" +this.idvalue,this.modl,
  {
  headers:{
  "X-Access-Token":this.token
  }
 })
  .subscribe(resp=>{
  console.log(resp)
  if(resp)
  {
  this.ht.get("http://192.168.1.137:8087/rpo/rest/certificates/")
  .subscribe(resp=>
  { 
  this.details=resp;
  console.log(resp);
  this.ngOnInit();
  });
  }
  window.alert("Successfully updated");
  }
  
  )}
  
 id(i){
  this.modelvalue=i.certificationName
  this.idvalue=i.id;
 }
}
