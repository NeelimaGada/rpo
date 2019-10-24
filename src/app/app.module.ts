import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ServiceService } from './service.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { LogoutComponent } from './logout/logout.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { ChartsModule } from 'ng2-charts';
import { UsersComponent } from './users/users.component';
import { SkillsComponent } from './skills/skills.component';
import { JoblocationComponent } from './joblocation/joblocation.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { JobserviceService } from './jobservice.service';
import { AddjobComponent } from './addjob/addjob.component';
import { BillingComponent } from './billing/billing.component';
import { CustomerComponent } from './customer/customer.component';
import {NgxPaginationModule} from 'ngx-pagination';
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
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    Home1Component,
    Home2Component,
    Home3Component,
    Dashboard1Component,
    Dashboard2Component,
    Dashboard3Component,
    UsersComponent,
    SkillsComponent,
    JoblocationComponent,
    AddjobComponent,
    BillingComponent,
    CustomerComponent,
    QualificationComponent,
    ServicesComponent,
    CertificatesComponent,
    PaymentComponent,
    ListpaymentComponent,
    ModeofIComponent,
    NoticeComponent,
    AddnoticeComponent,
    SkilladdComponent,
    ModeSubComponent,
    UseraddComponent,
    AddoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ShowHidePasswordModule,
    ChartsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [ServiceService,JobserviceService,{
    provide:HTTP_INTERCEPTORS,
    useClass:ServiceService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
