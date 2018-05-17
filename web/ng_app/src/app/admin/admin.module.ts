import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { AngularDependenciesModule } from '../shared/angular-dependencies.module';
import { appRoutes } from './admin.routing';
import { HeaderComponent } from './layout/header/header.component';
import { NewCompanyModalComponent } from './modals/new-company-modal/new-company-modal.component';
import { HiringManagersComponent } from './hiring-managers/hiring-managers.component';
import { NewHiringManagerModalComponent } from './modals/new-hiring-manager-modal/new-hiring-manager-modal.component';
import { NewEmployeeComponent } from './modals/new-employee/new-employee.component';
import { JobsComponent } from './jobs/jobs.component';
import { NewJobComponent } from './modals/new-job/new-job.component';
import { StatsComponent } from './stats/stats.component';
import { TrackResponsesComponent } from './track-responses/track-responses.component';
import { AdminService } from '../shared/admin.service';
import { CompanyResolver } from './company/company.resolver';
import { HiringManagersResolver } from './hiring-managers/hiring-managers.resolver';
import { JobsResolver } from './jobs/jobs.resolver';
import { HiringManagerService } from './shared/hiring-manager.service';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    AngularDependenciesModule,
    NgSelectModule
  ],
  entryComponents: [
    NewCompanyModalComponent
  ],
  declarations: [CompanyComponent,
    AdminComponent,
    HeaderComponent,
    NewCompanyModalComponent,
    HiringManagersComponent,
    NewHiringManagerModalComponent,
    NewEmployeeComponent,
    JobsComponent,
    NewJobComponent,
    StatsComponent,
    TrackResponsesComponent],
    providers: [
      AdminService,
      CompanyResolver,
      HiringManagersResolver,
      JobsResolver,
      HiringManagerService
    ]
})
export class AdminModule { }
