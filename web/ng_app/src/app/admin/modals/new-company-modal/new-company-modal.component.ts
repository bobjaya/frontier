import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../../shared/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-company-modal',
  templateUrl: './new-company-modal.component.html',
  styleUrls: ['./new-company-modal.component.sass']
})
export class NewCompanyModalComponent implements OnInit {

  companyForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    address1: new FormControl('', [Validators.required, Validators.minLength(5)]),
    address2: new FormControl(''),
    state: new FormControl('', [Validators.required, Validators.minLength(2)]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)]),
    zip_code: new FormControl(''),
    client_contact: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  constructor(private adminService: AdminService,
  private router: Router) {
  }

  ngOnInit() {
  }

  saveNewCompany() {
    this.adminService.saveCompany(this.companyForm.value);
    this.router.navigate(['/admin/company']);
  }

}
