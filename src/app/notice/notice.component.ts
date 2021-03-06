import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
 
@Component({
selector: 'app-notice',
templateUrl: './notice.component.html',
styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
svalue;
modelvalue;
 
tabledata;
token;
notprd;
modelobj;
id;
 
constructor(private s:ServiceService,private r:Router,private ht:HttpClient) { 
 
this.ht.get("http://192.168.1.137:8087/rpo/rest/noticePeriod").subscribe(res => {
console.log(res)
this.tabledata = res
 
 }
 )
}
 
ngOnInit() {
this.token=localStorage.getItem('token');
this.s.noticeget(this.token).subscribe(res=>{console.log(res)
this.notprd=res;
this.tabledata=this.notprd.result;
 
 })
 }
modelmethod(e){
this.modelvalue=e.noticePeriod;
this.id=e.id;
 }
addroute(){
 
this.r.navigate(['home/addnotice']);
 }
status;
update(e){
this.modelobj={'id':this.id,'noticePeriod':e}
this.s.noticeedit(this.modelobj ).subscribe(res=>{console.log(res)
alert("edited success, refresh to see updated table")
 
 });
// alert("successfully edited");
 
 }}