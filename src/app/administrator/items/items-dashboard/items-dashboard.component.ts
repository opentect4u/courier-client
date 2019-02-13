import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-items-dashboard',
  templateUrl: './items-dashboard.component.html',
  styleUrls: ['./items-dashboard.component.scss']
})
export class ItemsDashboardComponent implements OnInit {

  itemsDetails: any;

  constructor(private data: DataService,
    private router: Router) { }

  ngOnInit() {

    this.data.getItems().subscribe(data => {
      this.itemsDetails = data;
      
      if(this.itemsDetails.token == 'No Data Found'){
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }

    });

  }

}
