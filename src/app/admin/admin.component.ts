import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ISupport } from '../models/ISupport';
import { TicketService } from '../service/ticket.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  userData$!: Observable<ISupport[]>;
  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.userData$ = this.ticketService.getAllTickets();
  }

  onDownload(data: ISupport) {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', data.attachmentUrl);
    link.setAttribute('download', `products.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
