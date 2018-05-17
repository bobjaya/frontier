import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../../shared/admin.service';
import { HiringManagerService } from '../../shared/hiring-manager.service';

@Component({
  selector: 'app-new-hiring-manager-modal',
  templateUrl: './new-hiring-manager-modal.component.html',
  styleUrls: ['./new-hiring-manager-modal.component.sass']
})
export class NewHiringManagerModalComponent implements OnInit {

  hiringManagerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    position: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(4)]),
    address1: new FormControl('', [Validators.required, Validators.minLength(5)]),
    address2: new FormControl(''),
    state: new FormControl('', [Validators.required, Validators.minLength(2)]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)]),
    zip_code: new FormControl(''),
  });
  constructor(private adminService: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private hiringManagerService: HiringManagerService) { }

  ngOnInit() {
  }

  saveManager() {
    let data = this.hiringManagerForm.value;
    data.company = this.hiringManagerService.companyName;
    this.adminService.saveHiringManager(data);
    this.router.navigate(['admin/hiring-manager/' + this.hiringManagerService.companyName]);
  }

}
