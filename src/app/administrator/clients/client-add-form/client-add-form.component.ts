import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-client-form',
  templateUrl: './client-add-form.component.html',
  styleUrls: ['./client-add-form.component.scss']
})
export class ClientAddFormComponent implements OnInit {

  fGroup: FormGroup;
  name: string = '';
  address: string = '';
  location: string = '';
  pin: string = '';
  body: object;

  constructor(private formBuilder: FormBuilder,
              private dataService: DataService,
              private router: Router) {

    this.fGroup = formBuilder.group({

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
  }

  addClient(){
    this.dataService.addClient(this.fGroup.value).subscribe();
    this.router.navigate(['/clients/dashboard']);
  }

}
