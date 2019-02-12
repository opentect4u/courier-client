import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-client-edit-form',
  templateUrl: './client-edit-form.component.html',
  styleUrls: ['./client-edit-form.component.scss']
})
export class ClientEditFormComponent implements OnInit {

  client: object;
  fGroup: FormGroup;
  name: string;
  address: string;
  

  constructor(private router: Router,
              private route: ActivatedRoute,
              private data: DataService,
              private formBuilder: FormBuilder,
              private dataService: DataService
  ) { 

    this.fGroup = this.formBuilder.group({
      id: [],
      name: [null, Validators.required ],
      address: [null, Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100) ])
      ],
      location: [null, Validators.required],
      pin:[null, Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6)

      ])]

    });

  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      
      this.data.getClient(params['id']).subscribe(res => {
        
        this.fGroup.setValue({
          id: res[0].sl_no,
          name: res[0].name,
          address: res[0].address,
          location: res[0].location,
          pin: res[0].pin
        });

      });

    });
  }

  editClient(){
    this.dataService.editClient(this.fGroup.value);
    this.router.navigate(['/clients/dashboard']);
  }
}
