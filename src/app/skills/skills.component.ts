import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';
import { SkillserviceService } from '../skillservice.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  Skilltype: string;
  Skilltype1: string;
  id1: any;

  constructor(private r: Router, private ht: HttpClient, private s: SkillserviceService) {
    // this.ht.get("http://192.168.1.137:8087/rpo/rest/skill").subscribe(res => {
    //   console.log(res)
    //   this.arr = res
    //   console.log(this.arr);
    // }
    // )
  }
  skilln;
  skillt;
  arr;
  ;
  ta;
skif;
  tt;
  fl;
  arr1 = [];
  arr2 = [];
  objedir={"skillName":this.skilln,
  "flag":this.skif
};
;
  ngOnInit() {
    this.tt = localStorage.getItem('token')

    this.s.tabledata(this.tt).subscribe(res => {

      this.arr = res;

      this.ta = this.arr.result;
      for (let i = 0; i < this.ta.length; i++) {


        if (this.ta[i].flag == true) {

          console.log("skillname", this.ta[i].skillName);
          this.arr1.push(
            {
              "id": this.ta[i].id,
              "skillName": this.ta[i].skillName,
              "Skilltype": "primary"
            }
          );
        }
        else {

          this.arr1.push({
            "id": this.ta[i].id,
            "skillName": this.ta[i].skillName,
            "Skilltype": "secondary"
          });
        }

      }

    });
  }

  cl() {
    this.r.navigate(['home/skilladd'])
  }
  EditofTable() {

  }
  edit(e){
console.log(e.id)
    this.id1=e.id;
    // console.log(e.skillName)
    this.skilln=e.skillName;
    // console.log(e.Skilltype)
    this.skillt=e.Skilltype;
    console.log(this.skillt)
   
   

  }
  obj:{}
 



 
  update(a){
    debugger;
    // this.skilln=a.skillName
    // this.skillt=a.flag
   
   this.obj={
     "id":this.id1,
     "skillName":a.skillName,
     "flag":a.flag
   }
   console.log(this.obj);
 
  this.s.tableupdate(this.obj).subscribe(res=>console.log(res))
  }
 
}
