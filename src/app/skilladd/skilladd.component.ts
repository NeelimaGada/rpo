import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillserviceService } from '../skillservice.service';

@Component({
  selector: 'app-skilladd',
  templateUrl: './skilladd.component.html',
  styleUrls: ['./skilladd.component.css']
})
export class SkilladdComponent implements OnInit {

  constructor(private s:SkillserviceService,private p:Router) { }

  ngOnInit() {
  }
  addnewdetails(e){
    console.log(e)
this.s.addnewdetails(e).subscribe(res=>{console.log(res)
})
     this.p.navigate(['home/skills'])

 
  }
}
