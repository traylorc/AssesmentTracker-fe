import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { LoginComponent } from './user/login/login.component';
import { E404Component } from './misc/e404/e404.component';
import { ImportDataCreateComponent } from './importData/import-data-create/import-data-create.component';
import { ImportDataDetailComponent } from './importData/import-data-detail/import-data-detail.component';
import { ImportDataEditComponent } from './importData/import-data-edit/import-data-edit.component';
import { ImportDataListComponent } from './importData/import-data-list/import-data-list.component';
import { ImportDataUploadComponent } from './importData/import-data-upload/import-data-upload.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,
    UserListComponent,
    LoginComponent,
    E404Component,
    ImportDataCreateComponent,
    ImportDataDetailComponent,
    ImportDataEditComponent,
    ImportDataListComponent,
    ImportDataUploadComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
