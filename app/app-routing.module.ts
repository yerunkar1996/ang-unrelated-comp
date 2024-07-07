import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegformComponent } from './regform/regform.component';
import { RegistrationComponent } from './registration/registration.component';
import { SinupComponent } from './sinup/sinup.component';
import { StrDirComponent } from './str-dir/str-dir.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { WildcardComponent } from './wildcard/wildcard.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegistrationComponent},
  {path:"sinup",component:SinupComponent},
  {path:"strdir",component:StrDirComponent},
  {path:"child1",component:Child1Component},
  {path:"child2",component:Child2Component},
  {path:"empdetails/:id",component:EmpdetailsComponent},
  {path:"userlist",component:UserListComponent},
  {path:"userdetails/:id",component:UserDetailComponent},
  {path:"regForm",component:RegformComponent},
  {path:"reg/:id",component:RegformComponent},
  {path:"**",component:WildcardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
 
