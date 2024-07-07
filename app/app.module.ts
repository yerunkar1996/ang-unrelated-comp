import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule}  from '@angular/common/http'
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SinupComponent } from './sinup/sinup.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { StrDirComponent } from './str-dir/str-dir.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ApiComponent } from './serv/api/api.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RegformComponent } from './regform/regform.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    SinupComponent,
    HeaderComponent,
    HomeComponent,
    WildcardComponent,
    StrDirComponent,
    Child1Component,
    Child2Component,
    ApiComponent,
    EmpdetailsComponent,
    UserListComponent,
    UserDetailComponent,
    RegformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
