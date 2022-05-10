import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from '../model/ticket';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-creat-ticket',
  templateUrl: './creat-ticket.component.html',
  styleUrls: ['./creat-ticket.component.css']
})
export class CreatTicketComponent implements OnInit {
  ticket : Ticket = new Ticket;

  constructor(private  ticketServices: TicketService , private router : Router ) { }

  ngOnInit(): void {

  }
 saveTicket(){
   return this.ticketServices.createTicket(this.ticket).subscribe(data=>{console.log(data);
   this.goToTicketList();}
 ,  error=> console.log(error))
 
 
 }
 goToTicketList(){
    this.router.navigate(['/ticket-List']);
   

  }
  

  OnSubmit(){
   
    console.log(this.ticket)
    this.saveTicket();
    console.log(this.ticket)
   }



}

