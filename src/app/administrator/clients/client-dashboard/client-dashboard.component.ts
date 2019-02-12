import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent implements OnInit {

  clientsDetails: any;
  public id = 0;
  constructor(private data: DataService,
              private router: Router) { }

  ngOnInit() {

    this.data.getClients().subscribe(data => {
      this.clientsDetails = data;
      
      if(this.clientsDetails.token == 'No Data Found'){
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }
    });

  }

}
