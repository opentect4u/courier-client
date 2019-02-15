import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-courier-service-dashboard',
  templateUrl: './courier-service-dashboard.component.html',
  styleUrls: ['./courier-service-dashboard.component.scss']
})
export class CourierServiceDashboardComponent implements OnInit {

  details: any;

  constructor(private data: DataService,
              private router: Router) { }

  ngOnInit() {

    this.data.getCourierServs().subscribe(data => {
      
      this.details = data;
      
      if(this.details.token == 'No Data Found'){
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }

    });

  }

  delete(id){
    
    if(confirm('Are You Sure?')){
      this.data.deleteCourierServ(id).subscribe((res) => {
      
        for(let i = 0; i < this.details.length; i++ ){
          if(this.details[i]['sl_no'] == id){
            this.details.splice(i, id);
          }
        }
      });
    }
    
  }

}
