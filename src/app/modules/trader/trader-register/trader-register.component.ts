import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TraderserviceService } from 'src/services/traderservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trader-register',
  templateUrl: './trader-register.component.html',
  styleUrls: ['./trader-register.component.css']
})
export class TraderRegisterComponent implements OnInit {

     
  traderRegisterForm!:FormGroup;
  adminId:any;


  constructor(private traderService: TraderserviceService,private formBuilder: FormBuilder, private router: Router) {this.initAddTraderForm(); }

  initAddTraderForm() {
    this.traderRegisterForm = this.formBuilder.group({

      emailId:new FormControl('', Validators.required),
      password:new FormControl('', Validators.required),
      firstname:new FormControl('', Validators.required),
      lastname:new FormControl('', Validators.required),
      dateOfBirth:new FormControl('', Validators.required),
      panNumber:new FormControl('', Validators.required),
      phoneNumber:new FormControl('', Validators.required),
    })
  }

  traderRegister() {
    this.traderService.addTrader(this.traderRegisterForm.value).subscribe({
      next: (response: any) => {
        console.log(response);
         if(response!=null)
         {
           this.router.navigate(['traderlogin'])
        }
        Swal.fire({
          icon:'success',
          title:'Successfully Registered!',
          text:'Go To Login page',
        })

      },
      error: (error: any) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Server Offline',
          text: 'Please start the server!',
        });
      },
      complete: () => {
        console.log('Complete');
      },
    });
  }
  ngOnInit(): void {


  }
}

