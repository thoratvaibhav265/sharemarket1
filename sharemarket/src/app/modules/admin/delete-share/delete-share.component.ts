import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Share } from 'src/classes/share';
import { ShareService } from 'src/services/share.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-share',
  templateUrl: './delete-share.component.html',
  styleUrls: ['./delete-share.component.css']
})
export class DeleteShareComponent implements OnInit {

  share!:Share;
  shareId:any;

  constructor(private shareService: ShareService,private activatedRoute:ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { };

  deleteShare(){
    this.shareId=this.activatedRoute.snapshot.paramMap.get('id');
    this.shareService.getShareById(this.shareId).subscribe({
      next: (response: any) => {
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
    })
  }
  ngOnInit(): void {
  }

}
