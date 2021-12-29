import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Share } from 'src/classes/share';
import { ShareService } from 'src/services/share.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-share',
  templateUrl: './view-share.component.html',
  styleUrls: ['./view-share.component.css']
})
export class ViewShareComponent implements OnInit {



  share!:Share[];

  constructor(private shareService: ShareService, private router: Router)
  {  }


  getAllShare()
  {
    this.shareService.getAllshares().subscribe({
      next: (response: any) => {
        this.share=response;
        console.log(this.share);
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

     this.getAllShare();
}
}