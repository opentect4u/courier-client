import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-courier-comp-form',
  templateUrl: './courier-comp-form.component.html',
  styleUrls: ['./courier-comp-form.component.scss']
})
export class CourierCompFormComponent implements OnInit {

  fGroup: FormGroup;
  
  constructor(private router: Router,
    private route: ActivatedRoute,
    private data: DataService,
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) { 

    this.fGroup = formBuilder.group({
      id: [],
      name: [null, Validators.required ],
      address: [null, Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100) ])
      ],
      contact_person: [null, Validators.required],
      contact_no:[null, Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]'),
        Validators.minLength(10),
        Validators.maxLength(10)

      ])]

    });

  }

  ngOnInit() {

    this.route.params.subscribe(params => {

      if(params['id']){

        this.data.getCourierComp(params['id']).subscribe(res => {
          this.fGroup.setValue({
            id: res[0].sl_no,
            name: res[0].name,
            address: res[0].address,
            contact_no: res[0].contact_no,
            contact_person: res[0].contact_person
          });
  
        });
      }
      
    });

  }

  submit(){

    this.route.params.subscribe(params => {

      if(params['id']){
        this.editCourierComp();
      }
      else{
        this.addCourierComp();
      }
    });

  }

  addCourierComp(){
    this.dataService.addCourierComp(this.fGroup.value).subscribe();
    this.router.navigate(['/courier-company/dashboard']);
  }

  editCourierComp(){
    
    this.dataService.editCourierComp(this.fGroup.value).subscribe(res => {
      this.router.navigate(['/courier-company/dashboard']);
    });

  }

}
