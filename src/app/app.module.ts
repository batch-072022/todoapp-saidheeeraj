import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddTaskComponent,
    ForgotPasswordComponent,
    ListUsersComponent,
    ViewProfileComponent,
    ListTasksComponent,
    ChangePasswordComponent,
    HeaderComponent,
    HomeComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
