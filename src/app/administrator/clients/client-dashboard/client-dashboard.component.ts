import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent implements OnInit {

  clientsDetails: any;

  constructor(private data: DataService) { }

  ngOnInit() {

    this.data.getClients().subscribe(data => {
      this.clientsDetails = data;
    });

  }

}
