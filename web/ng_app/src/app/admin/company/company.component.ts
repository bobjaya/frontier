import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../shared/admin.service';
import { HiringManagerService } from '../shared/hiring-manager.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.sass']
})
export class CompanyComponent implements OnInit {

  companies = [];

  constructor(private activatedRoute: ActivatedRoute,
    private adminService: AdminService) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((res) => {
      this.companies = res.CompanyResolver;
    });
  }

}
