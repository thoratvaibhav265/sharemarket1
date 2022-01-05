import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareService } from 'src/services/share.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-share',
  templateUrl: './add-share.component.html',
  styleUrls: ['./add-share.component.css']
})
export class AddShareComponent implements OnInit {



  createShare!: FormGroup;
  adminId:any;


  constructor(private shareService: ShareService,private formBuilder: FormBuilder, private router: Router) {this.initAddShareForm(); }

  initAddShareForm() {
    this.createShare = this.formBuilder.group({

      sharename:new FormControl('', Validators.required),
      price:new FormControl('', Validators.required),
      quantity:new FormControl('', Validators.required),
      status:new FormControl('Standing', Validators.required)
    })
  }

  addShare() {
    this.adminId=Number(localStorage.getItem('adminId'));
    this.shareService.addShare(this.adminId,this.createShare.value).subscribe({
      next: (response: any) => {
        console.log(response);
        if(response!=null)
        {
          this.router.navigate(['watchlist'])
        }

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
