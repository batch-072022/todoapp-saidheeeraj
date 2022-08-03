import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ListTaskComponent } from './list-task/list-task.component';

import { ViewUserComponent } from './view-user/view-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditTaskComponent } from './edit-task/edit-task.component';



const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'users', component:ListUsersComponent},
  {path:'viewuser',component:ViewUserComponent},
  {path:'edituser',component:EditUserComponent},
  {path:'addtask', component:AddTaskComponent},
  {path:'listtask',component:ListTaskComponent},
  {path:'edittasks',component:EditTaskComponent},
  {path:'', redirectTo:'home' ,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
