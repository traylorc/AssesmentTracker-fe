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
import { ImportDataCreateComponent } from './import-Data/import-data-create/import-data-create.component';
import { ImportDataDetailComponent } from './import-Data/import-data-detail/import-data-detail.component';
import { ImportDataEditComponent } from './import-Data/import-data-edit/import-data-edit.component';
import { ImportDataListComponent } from './import-Data/import-data-list/import-data-list.component';
import { ImportDataUploadComponent } from './import-Data/import-data-upload/import-data-upload.component';
import { UploadComponent } from './upload/upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './misc/banner/banner.component';
import { MenuComponent } from './menu/menu/menu.component';
import { MatMenuModule} from '@angular/material/menu'
import { MatButtonModule} from '@angular/material/button';
import { SearchImportdataPipe } from './import-Data/search-importdata.pipe';
import { SortPipe } from './misc/sort.pipe';
import { ImportdataTableComponent } from './importdata-table/importdata-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'


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
    UploadComponent,
    BannerComponent,
    MenuComponent,
    SearchImportdataPipe,
    SortPipe,
    ImportdataTableComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule, MatButtonModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
