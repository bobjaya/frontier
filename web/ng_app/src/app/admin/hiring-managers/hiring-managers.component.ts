import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HiringManagerService } from '../shared/hiring-manager.service';

@Component({
  selector: 'app-hiring-managers',
  templateUrl: './hiring-managers.component.html',
  styleUrls: ['./hiring-managers.component.sass']
})
export class HiringManagersComponent implements OnInit {

  managers = [];
  constructor(private activatedRoute: ActivatedRoute,
    private hiringManagerService: HiringManagerService) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe((param) => {
      console.log(param);
      this.hiringManagerService.companyName = param.company;
    });
    this.activatedRoute.data.subscribe((res) => {
      this.managers = res.HiringManagersResolver;
    });
  }

}
