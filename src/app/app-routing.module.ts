import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportDataDetailComponent } from './import-Data/import-data-detail/import-data-detail.component';
import { ImportDataListComponent } from './import-Data/import-data-list/import-data-list.component';
import { ImportDataUploadComponent } from './import-Data/import-data-upload/import-data-upload.component';
import { ImportdataTableComponent } from './importdata-table/importdata-table.component';
import { E404Component } from './misc/e404/e404.component';
import { UploadComponent } from './upload/upload.component';
import { LoginComponent } from './user/login/login.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [

  {path:'', redirectTo:'importdata/list', pathMatch:'full'},

  {path:'login', component: LoginComponent},

  {path:'user/list', component: UserListComponent},
  {path:'user/detail/:id', component: UserDetailComponent},
  {path:'user/create', component: UserCreateComponent},
  {path:'user/edit/:id', component: UserEditComponent},

  {path: 'importdata/list', component: ImportDataListComponent},
  {path: 'importdata/upload', component: ImportDataUploadComponent},
  {path:'importdata/detail/:emplid/:hiredate', component: ImportDataDetailComponent},

  {path: 'importdata/table', component: ImportdataTableComponent},

  {path:'upload', component: UploadComponent},


  {path:'**', component: E404Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
