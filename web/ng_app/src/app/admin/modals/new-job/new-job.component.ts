import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HiringManagerService } from '../../shared/hiring-manager.service';
import { AdminService } from '../../../shared/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.sass']
})
export class NewJobComponent implements OnInit {

  jobForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)]),
    state: new FormControl('', [Validators.required, Validators.minLength(2)]),
    type: new FormControl('', [Validators.required]),
    level: new FormControl('', [Validators.required]),
  });
  constructor(
    private hiringManagerService: HiringManagerService,
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addNewJob() {
    let data = this.jobForm.value;
    data.manager = this.hiringManagerService.hiringManagerName;
    data.company = this.hiringManagerService.companyName;
    this.adminService.saveJob(data);
    this.router.navigate(['admin/jobs/' + this.hiringManagerService.hiringManagerName]);
  }

}
