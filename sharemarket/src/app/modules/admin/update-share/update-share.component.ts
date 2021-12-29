import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/classes/admin';
import { ShareService } from 'src/services/share.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-share',
  templateUrl: './update-share.component.html',
  styleUrls: ['./update-share.component.css']
})
export class UpdateShareComponent implements OnInit {

  updateShare!: FormGroup
  adminId!:any

  constructor(private shareService: ShareService, private formBuilder: FormBuilder, private router: Router) { }

  initAddShareForm() {
    this.updateShare = this.formBuilder.group({

      sharename: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      status: new FormControl('Standing', Validators.required)


    })
  }

  ngOnInit(): void { }

  updateShares(){
    {
      this.adminId=Number(localStorage.getItem('adminId'));
      this.shareService.addShare(this.adminId,this.updateShare.value).subscribe({
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
  }
  

}
