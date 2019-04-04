import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { HeadMenuComponent } from './head-menu/head-menu.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ApiService} from './core/api.service';
import {HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './core/interceptor';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    HeadMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService, TokenInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
