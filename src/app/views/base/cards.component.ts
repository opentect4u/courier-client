import { Component , OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'cards.component.html'
})
export class CardsComponent implements OnInit{

  constructor(private data: DataService,
              private router: Router) { }

  ngOnInit(){

    this.data.getProfile().subscribe(data=>{
      if(data.token == 'No Data Found'){
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }

    })

  }

}
