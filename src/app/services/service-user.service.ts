
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {


  private baseUrl :"http://localhost:8080/api/V1/users";
                   
 

  constructor(private httpClient : HttpClient) { }

  getUserList():Observable<User[]>{
    
      return this.httpClient.get<User[]>('http://localhost:8080/api/V1/users');
    }

    createUser(user: User) : Observable<Object>{
      return this.httpClient.post("http://localhost:8080/api/V1/users",user)

    }

    getUserById(id:number): Observable<User>{
      console.log(id)
      return this.httpClient.get<User>(`http://localhost:8080/api/V1/users/${id}`)
    }

    updateUser(id : number , user :User):Observable<object>{
      return this.httpClient.put(`http://localhost:8080/api/V1/user/${id}`,user);
    }

    deletUser(id : number): Observable<Object>{
      return this.httpClient.delete(`http://localhost:8080/api/V1/users/${id}`)
    }
  }

