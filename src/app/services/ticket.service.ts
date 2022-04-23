import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../model/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private  baseUrlTicket :"http://localhost:8080/api/V1/tickets/ ";

  constructor(private http : HttpClient) { }

getListTicket():Observable<Ticket[]> {

  return this.http.get<Ticket[]>("http://localhost:8080/api/V1/tickets/ ");
  


}
updateTicket(id : number):Observable<Ticket[]>{
  return this.http.put<Ticket[]>("http://localhost:8080/api/V1/tickets/",id)
}

createTicket(ticket : Ticket): Observable<Object>{
  return this.http.post("http://localhost:8080/api/V1/tickets/",ticket)

}
getTicketById(id:number): Observable<Ticket>{
  console.log(id)
  return this.http.get<Ticket>(`http://localhost:8080/api/V1/Tickets/${id}`)
}

}
