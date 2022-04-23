import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { ServiceUserService } from '../services/service-user.service';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  [x: string]: any;

  id : number;
  user: User = new User ;
  constructor(private userServices: ServiceUserService , private route : ActivatedRoute,
    private router : Router) {  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.userServices.getUserById(this.id).subscribe(data=>{

      this.user =data 
    },error=>console.log(error));
      }

      OnSubmit(){
        this.userServices.updateUser(this.id,this.user).subscribe(data=>{
           this.goToUserList(); 
         
        }, error=> console.log(error()))}
      
        
       goToUserList(){
         this.router.navigate(['/users']);
     
    }      
    
}

