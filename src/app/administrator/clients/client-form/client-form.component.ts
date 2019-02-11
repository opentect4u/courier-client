import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  fGroup: FormGroup;
  name: string = '';
  address: string = '';
  location: string = '';
  pin: string = '';

  constructor(private formBuilder: FormBuilder) {

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
    console.log(this.fGroup.value);
  }

}
