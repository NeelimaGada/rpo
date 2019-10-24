import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';
import { UsersComponent } from './users/users.component';
import { SkillsComponent } from './skills/skills.component';
import { JoblocationComponent } from './joblocation/joblocation.component';
import { AddjobComponent } from './addjob/addjob.component';
import { BillingComponent } from './billing/billing.component';
import { CustomerComponent } from './customer/customer.component';
import { QualificationComponent } from './qualification/qualification.component';
import { ServicesComponent } from './services/services.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { PaymentComponent } from './payment/payment.component';
import { ListpaymentComponent } from './listpayment/listpayment.component';
import { ModeofIComponent } from './modeof-i/modeof-i.component';
import { NoticeComponent } from './notice/notice.component';
import { AddnoticeComponent } from './addnotice/addnotice.component';
import { SkilladdComponent } from './skilladd/skilladd.component';
import { ModeSubComponent } from './mode-sub/mode-sub.component';
import { UseraddComponent } from './useradd/useradd.component';
import { AddoComponent } from './addo/addo.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  },
{
  path:'home',
  component:HomeComponent,
  children:[
    {
      path:'',
      redirectTo:'dashboard',
      pathMatch:'full'
    },{
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  
  {
    path:'skills',
    component:SkillsComponent
  },
  {
    path:'job',
    component:JoblocationComponent
  },
{
  path:'add',
  component:AddjobComponent
},
{
  path:'bill',
  component:BillingComponent
},
{
  path:'customer',
  component:CustomerComponent
},
{
  path:'moi',
  component:ModeofIComponent
},
{
  path:'notice',
  component:NoticeComponent
},
{
  path:'addnotice',
  component:AddnoticeComponent
},
{
  path:'skilladd',
  component:SkilladdComponent
},
{
  path:'modeSub',
  component:ModeSubComponent
},
{
  path:'useradd',
  component:UseraddComponent
},
{
  path:'qualification',
  component:QualificationComponent
}
,

{
  path:'certificates',
  component:CertificatesComponent
},
{
  path:'addo',
  component:AddoComponent

},
{
  path:'service',
  component:ServicesComponent
},

{
  path:'payment',
  component:PaymentComponent
},


{
  path:'list',
  component:ListpaymentComponent
}]
},
{
  path:'home1',
  component:Home1Component
},
{
  path:'home2',
  component:Home2Component
},
{
  path:'home3',
  component:Home3Component
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
