import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './users/add-user/add-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ViewUsersComponent } from './users/view-users/view-users.component';

const routes: Routes = [
  {path: 'users', 
   children:[
     {path:'', component:ListUsersComponent},
     {path: 'create', component:AddUserComponent},
     {path:'list', component:ListUsersComponent},
    {path:'delete/:id', component:DeleteUserComponent},
    {path: 'view/:id', component:ViewUsersComponent},
    {path:'edit/:id', component:EditUserComponent}
 ] 
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
