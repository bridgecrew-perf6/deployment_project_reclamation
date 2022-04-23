import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { CreatTicketComponent } from './creat-complaint/creat-ticket.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginComponent } from './login/login.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AddArticleComponent } from './add-article/add-article.component';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon'


// import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CreateUserComponent,
    UpdateUserComponent,
    TicketListComponent,
    CreatTicketComponent,
    NavbarComponent,
    UpdateTicketComponent,
    LoginComponent,
    AddArticleComponent,
    
   
  ],
  imports: [
    MatIconModule,
    MatInputModule ,
    MatButtonModule,
    ReactiveFormsModule ,
    MatSelectModule,
    MatButtonModule,
    MatSliderModule,
    MatPaginatorModule ,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
