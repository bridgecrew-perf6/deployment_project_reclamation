import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatTicketComponent } from './creat-complaint/creat-ticket.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginComponent } from './login/login.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { AuthGuard } from './_auth/auth.guard';


const routes: Routes = [
  {path: "app-login", component:LoginComponent },
  {path: 'users',component: UserListComponent , canActivate:[AuthGuard],data:{roles:['Admin'] }},
  {path : 'create-user', component : CreateUserComponent , canActivate:[AuthGuard],data:{roles:['Admin'] }},
  { path: '', redirectTo: 'users',pathMatch:'full'},
  {path: 'update-user/:id',component:UpdateUserComponent},
  {path: "ticket-List", component:TicketListComponent, canActivate:[AuthGuard],data:{roles:['User'] }},
  {path:"create-ticket",component:CreatTicketComponent , canActivate:[AuthGuard],data:{roles:['User' , 'Admin'] }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
