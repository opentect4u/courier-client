import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-courier-comp-dashboard',
  templateUrl: './courier-comp-dashboard.component.html',
  styleUrls: ['./courier-comp-dashboard.component.scss']
})
export class CourierCompDashboardComponent implements OnInit {

  details: any;

  constructor(private data: DataService,
    private router: Router) { }

  ngOnInit() {

    this.data.getCourierComps().subscribe(data => {
      this.details = data;
      
      if(this.details.token == 'No Data Found'){
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }

    });

  }

}
