import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TraderserviceService } from 'src/services/traderservice.service';

@Component({
  selector: 'app-trader-register',
  templateUrl: './trader-register.component.html',
  styleUrls: ['./trader-register.component.css']
})
export class TraderRegisterComponent implements OnInit {

     
  traderRegisterForm!:FormGroup;



  constructor(
      private router:Router,
      private traderService:TraderserviceService,
      private activatedRoute:ActivatedRoute,
      private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    
  }
  
  traderRegister(){

  }

}
