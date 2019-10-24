import { Component, OnInit } from '@angular/core';
import { JobserviceService } from '../jobservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joblocation',
  templateUrl: './joblocation.component.html',
  styleUrls: ['./joblocation.component.css']
})
export class JoblocationComponent implements OnInit {
  tabledata(tabledata: any) {
    throw new Error("Method not implemented.");
  }

  constructor(private r:Router ,private s:JobserviceService, private ht: HttpClient) { 
    this.ht.get("http://192.168.1.137:8087/rpo/rest/skill").subscribe(res => {
console.log(res)
this.table= res
console.log(this.table);
}
)
  }
table;
token
  ngOnInit() {
    // this.table=JSON.parse(localStorage.getItem('notice'));
    this.token=localStorage.getItem('token')
    
    this.s.noticeget(this.token).subscribe(resp=>{console.log(resp)
    this.table=resp})
  }
  addroute(){
 
    this.r.navigate(['/home/add']);
    }


}
