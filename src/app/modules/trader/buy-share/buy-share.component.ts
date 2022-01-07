import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Share } from 'src/classes/share';
import { ShareService } from 'src/services/share.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buy-share',
  templateUrl: './buy-share.component.html',
  styleUrls: ['./buy-share.component.css']
})
export class BuyShareComponent implements OnInit {

  buyShares!: FormGroup;
  traderId!: any;
  price!: any;
  shareId!: any;
  share!: Share;

  constructor(private shareService: ShareService,private activatedRoute:ActivatedRoute, private formBuilder: FormBuilder, private router: Router) 
  { this.initBuyShareForm() }

  initBuyShareForm() {
    this.buyShares = this.formBuilder.group({
      sharename: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    })
  }

   updatePrice() {
     this.price = this.buyShares.controls['quantity'].value * 100;
     return this.price;
   }


  fillBuyShareForm(share: Share) {
    this.buyShares = this.formBuilder.group({
      sharename: new FormControl(share.sharename, Validators.required),
      quantity: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    })
  }

  readShare() {
    this.shareId = this.activatedRoute.snapshot.paramMap.get('id');
    this.shareService.getShareById(this.shareId).subscribe({
      next: (response: any) => {
        console.log(response);
        if (response != null) {
          this.share = response;
          this.fillBuyShareForm(this.share);
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


  buyShare() {
    //   {
    //     this.traderId = Number(localStorage.getItem('traderId'));
    //     this.shareService.addShare(this.adminId, this.createShare.value).subscribe({
    //       next: (response: any) => {
    //         console.log(response);
    //         if (response != null) {
    //           this.router.navigate(['watchlist'])
    //         }

    //       },
    //       error: (error: any) => {
    //         console.log(error);
    //         Swal.fire({
    //           icon: 'error',
    //           title: 'Server Offline',
    //           text: 'Please start the server!',
    //         });
    //       },
    //       complete: () => {
    //         console.log('Complete');
    //       },
    //     });
  }


  ngOnInit(): void {
    this.readShare();
    this.updatePrice();

  }

}


