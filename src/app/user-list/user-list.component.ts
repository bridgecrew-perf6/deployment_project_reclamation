import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { ServiceUserService } from '../services/service-user.service';


@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
  })
  export class UserListComponent implements OnInit {

    users: User[];
 
    constructor(private userServices: ServiceUserService , private route : Router) { }

    ngOnInit(): void {
     
      this.getUser();

    }
      private getUser(){
        this.userServices.getUserList().subscribe(data => 
        this.users = data     
        );


      }

      updateUser(id : number){
        this.route.navigate(['update-user/',id])
      }
      
      delateUser(id : number){
        this.userServices.deletUser(id).subscribe(data=>{
          console.log(data);
          this.getUser();
        })
      }
      
       

      }
