import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/classes/admin';
import { Share } from 'src/classes/share';
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
  shareId!:any
  share!:Share

  constructor
  (private shareService: ShareService,private activatedRoute:ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { this.initUpdateShareForm();}

  initUpdateShareForm() {
    this.updateShare = this.formBuilder.group({

      sharename: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      status: new FormControl('Standing', Validators.required)
    })
  }

  ngOnInit(): void {  this.readShare() }

  fillUpdateShareForm(share:Share)
  {
    this.updateShare = this.formBuilder.group({

      sharename: new FormControl(share.sharename, Validators.required),
      price: new FormControl(share.price, Validators.required),
      quantity: new FormControl(share.quantity, Validators.required),
      status: new FormControl('Standing', Validators.required)
    })
  }

  readShare()
  {
    this.shareId=this.activatedRoute.snapshot.paramMap.get('id');
    this.shareService.getShareById(this.shareId).subscribe({
      next: (response: any) => {
        console.log(response);
        if(response!=null)
        {
          this.share=response;
          this.fillUpdateShareForm(this.share);
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
    })
  }


  updateShares(){
    {
      this.shareId=this.activatedRoute.snapshot.paramMap.get('id');
      this.shareService.updateShareById(this.shareId,this.updateShare.value).subscribe({
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
