import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/classes/admin';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLoginGroup!: FormGroup
  admin!:Admin;

  constructor(private adminLoginService: AdminService, private formBuilder: FormBuilder, private router: Router)
   { this.initAdminLoginForm(); }


  initAdminLoginForm() {
    this.adminLoginGroup = this.formBuilder.group({
      emailId: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  adminLogin() {
    this.adminLoginService.loginAdmin(this.adminLoginGroup.controls['emailId'].value, this.adminLoginGroup.controls['password'].value).subscribe
      ({
        next: (response: any) => {
          console.log(response);
          this.admin=response;
          localStorage.setItem('adminId',String (this.admin.adminId))
          if (response != null) { this.router.navigate(['admindashboard']) }
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
