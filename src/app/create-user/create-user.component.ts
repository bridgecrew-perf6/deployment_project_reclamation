import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { ServiceUserService } from '../services/service-user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user : User = new User

  constructor( private userServices: ServiceUserService , private router : Router) { }

  ngOnInit(): void {
  }
  saveUser(){
    return this.userServices.createUser(this.user).subscribe (data =>{console.log(data);
      this.goToUserList();}
    ,  error=> console.log(error))
    
    
  }

  goToUserList(){
    this.router.navigate(['/users']);
   

  }
  OnSubmit(){
   
   console.log(this.user)
   this.saveUser();
  }
}
