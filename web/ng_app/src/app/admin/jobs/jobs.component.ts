import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HiringManagerService } from '../shared/hiring-manager.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.sass']
})
export class JobsComponent implements OnInit {

  jobs = [];
  constructor(private activatedRoute: ActivatedRoute,
  private hiringManagerService: HiringManagerService) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe((param) => {
      console.log(param);
      this.hiringManagerService.hiringManagerName = param.manager;
    });
    this.activatedRoute.data.subscribe((res) => {
      this.jobs = res.JobsResolver;
    });
  }

}
