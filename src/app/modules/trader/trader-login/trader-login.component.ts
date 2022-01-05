import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TraderserviceService } from 'src/services/traderservice.service';

@Component({
  selector: 'app-trader-login',
  templateUrl: './trader-login.component.html',
  styleUrls: ['./trader-login.component.css']
})
export class TraderLoginComponent implements OnInit {


  traderLoginGroup!: FormGroup

  constructor(private router:Router,private traderLoginService: TraderserviceService, private formBuilder: FormBuilder) { this.initTraderLoginForm(); }


  initTraderLoginForm() {
    this.traderLoginGroup = this.formBuilder.group({
      emailId: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  traderLogin() {
    this.traderLoginService.loginTrader(this.traderLoginGroup.controls['emailId'].value, this.traderLoginGroup.controls['password'].value).subscribe
      ({
        next: (response: any) => {
          console.log(response);
          if(response!=null)
         {
           this.router.navigate(['watchlist'])
        }
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => {
          console.log('Complete');
        },
      });
  }
  ngOnInit(): void {
  }
}
