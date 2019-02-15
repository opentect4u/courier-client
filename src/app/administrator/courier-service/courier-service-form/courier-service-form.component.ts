import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-courier-service-in',
  templateUrl: './courier-service-form.component.html',
  styleUrls: ['./courier-service-form.component.scss']
})
export class CourierServiceFormComponent implements OnInit {

  fGroup: FormGroup;
  clients: Object;
  items: Object;
  comps: Object;
  flag: boolean = false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private data: DataService,
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) { 

    this.fGroup = formBuilder.group({
      sl_no: [],
      doc_no: [],
      receive_dt: [],
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
      receiver_or_sender: [],
      remarks: []
    });

  }

  ngOnInit() {

    this.route.params.subscribe(params => {

      if(params['id']){

        this.data.getCourierServ(params['id']).subscribe(res => {

          this.fGroup.setValue({
            sl_no: res[0].sl_no,
            doc_no: res[0].doc_no,
            receive_dt: [res[0].receive_dt],
            cname: res[0].client_id,
            date: res[0].trans_dt,
            trans_type: res[0].trans_type,
            item: res[0].item_id,
            comp: res[0].courier_comp_id,
            phn_no: res[0].phn_no,
            status: res[0].status,
            receiver_or_sender: res[0].receiver_or_sender,
            remarks: res[0].remarks
          });
          
          this.flag = (res[0].trans_type == 'O')? true: false;

        });
      }
      else{
        
        this.data.getMaxServId().subscribe(res => {
          
          this.fGroup.controls['sl_no'].setValue(res[0].sl_no);
    
        });

      }

      this.data.getClients().subscribe(res => {

        this.clients = res;
  
      });
  
      this.data.getItems().subscribe(res => {
  
        this.items = res;
  
      });
  
      this.data.getCourierComps().subscribe(res => {
  
        this.comps = res;
  
      });
      
    });

  }


  clicked(){

    if(this.fGroup.controls['trans_type'].value == 'O'){
      
      this.fGroup.controls['status'].setValue('INTRANSIT');

      this.flag = true;
    }
    else{

      this.fGroup.controls['status'].setValue('IN');
      this.fGroup.controls['receive_dt'].setValue('');
      this.fGroup.controls['doc_no'].setValue('');
      this.fGroup.controls['doc_no'].setValue('');

      this.flag = false;
    }
  }

  submit(){
    
    this.route.params.subscribe(params => {

      if(params['id']){
        this.dataService.editCourierServ(this.fGroup.value).subscribe();
        this.router.navigate(['/courier-service/dashboard']);
      }
      else{

        this.dataService.addCourierServ(this.fGroup.value).subscribe();
        this.router.navigate(['/courier-service/dashboard']);

      }
    
    });

  }

}
