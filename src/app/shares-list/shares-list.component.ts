import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Share } from 'src/classes/share';
import { ShareService } from 'src/services/share.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shares-list',
  templateUrl: './shares-list.component.html',
  styleUrls: ['./shares-list.component.css']
})
export class SharesListComponent implements OnInit {

share!:Share[];


  constructor(private shareService:ShareService,private router:Router) { }


  getAllShare(){
    this.shareService.getAllshares().subscribe({
      next: (response: any) => {
        this.share=response;
        console.log(response);
        
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
