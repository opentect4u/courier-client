import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-courier-service-in',
  templateUrl: './courier-service-in.component.html',
  styleUrls: ['./courier-service-in.component.scss']
})
export class CourierServiceInComponent implements OnInit {

  fGroup: FormGroup;
  clients: Object;
  items: Object;
  comps: Object;
  flag: boolean = false;

  constructor(private router: Router,
    private data: DataService,
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) { 

    this.fGroup = formBuilder.group({
      sl_no: [],
      doc_no: [],
      cname: [null, Validators.required ],
      date: [null, Validators.required ],
      trans_type: [null, Validators.required],
      item: [null, Validators.required ],
      comp: [null, Validators.required ],
      phn_no: [null, Validators.compose([
       
        Validators.pattern(/^-?(0|[0-9]\d*)?$/),
        Validators.minLength(10),
        Validators.maxLength(10)

      ])],
      status: [],
      received_by: [],
      remarks: []
    });

  }

  ngOnInit() {

    this.data.getClients().subscribe(res => {

      this.clients = res;

    });

    this.data.getItems().subscribe(res => {

      this.items = res;

    });

    this.data.getCourierComps().subscribe(res => {

      this.comps = res;

    });
    
    this.data.getMaxServId().subscribe(res => {
      
      this.fGroup.controls['sl_no'].setValue(res[0].sl_no);

    });

  }


  clicked(){

    if(this.fGroup.controls['trans_type'].value == 'O'){
      
      this.fGroup.controls['status'].setValue('INTRANSIT');

      this.flag = true;
    }
    else{

      this.fGroup.controls['status'].setValue('');

      this.flag = false;
    }
  }

  submit(){
    
    this.dataService.addCourierServ(this.fGroup.value).subscribe();
    this.router.navigate(['/courier-service/dashboard']);

  }

}
