import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  fGroup: FormGroup;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private data: DataService,
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) { 

    this.fGroup = this.formBuilder.group({
        id: [],
        name: [null, Validators.required ]
    });

}

  ngOnInit() {

    this.route.params.subscribe(params => {

      if(params['id']){

        this.data.getItem(params['id']).subscribe(res => {

          this.fGroup.setValue({
            id: res[0].sl_no,
            name: res[0].name,
          });
  
        });
      }
      
    });

  }

  submit(){

    this.route.params.subscribe(params => {

      if(params['id']){
        this.editItem();
      }
      else{
        this.addItem();
      }
    });

  }

  addItem(){
    this.dataService.addItem(this.fGroup.value).subscribe();
    this.router.navigate(['/items/dashboard']);
  }

  editItem(){
    
    this.dataService.editItem(this.fGroup.value).subscribe(res => {
      this.router.navigate(['/items/dashboard']);
    });

  }

}
