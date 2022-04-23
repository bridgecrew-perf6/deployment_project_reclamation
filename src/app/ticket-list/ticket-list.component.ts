import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Ticket } from '../model/ticket';
import { TicketService } from '../services/ticket.service';


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  selectedValue : String ;
  selectedTicket : Ticket
  displayedColumns: string[] = ['id', 'name', 'eamil', 'satuts','dateCreatinTicket','description'];
  tickets : Ticket[];
  ticket : Ticket
  dataSource  = new MatTableDataSource();
  constructor(private serviceTicket : TicketService ) { }

  ngOnInit(): void {

    this.getTickets()
  }
  
  
  private getTickets(){
    this.serviceTicket.getListTicket().subscribe(data=>
      this.tickets = data
      )

  }

  OnSubmit(){
    this.getTickets();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  changeStatus(){
    
  }
  
  
  // showDetails(){
  //   this.serviceTicket.getTicketById(this.selectedTicket.id).subscribe(data=>{
  //     this.

  //   });
  // }
  
}

