import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-courier-service-dashboard',
  templateUrl: './courier-service-dashboard.component.html',
  styleUrls: ['./courier-service-dashboard.component.scss']
})
export class CourierServiceDashboardComponent implements OnInit {

  fGroup: FormGroup;
  details: any;
  month: number = new Date().getMonth() + 1;
  year: number = new Date().getFullYear();

  constructor(
    private data: DataService,
    private router: Router,
    private formBuilder: FormBuilder,
    public datepipe: DatePipe
    ) { 

      this.fGroup = formBuilder.group({
        month:this.month,
        year: this.year
      });

  }

  ngOnInit() {

    this.currentMonthDetails(this.year, this.month);

  }

  currentMonthDetails(year, month){

    this.data.getCourierServs(year, month).subscribe(data => {
      
      this.details = data;
      
      if(this.details.token == 'No Data Found'){
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }

    });
  }

  onMonthChange(){

    this.currentMonthDetails(this.fGroup.controls['year'].value,
                             this.fGroup.controls['month'].value);

    
  }

  delete(id){
    
    if(confirm('Are You Sure?')){
      this.data.deleteCourierServ(id).subscribe((res) => {
      
        for(let i = 0; i < this.details.length; i++ ){
          if(this.details[i]['sl_no'] == id){
            this.details.splice(i, 1);
          }
        }
      });
    }
    
  }

}
