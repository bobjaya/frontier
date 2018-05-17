import { AdminComponent } from './admin.component';
import { Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { NewCompanyModalComponent } from './modals/new-company-modal/new-company-modal.component';
import { NewHiringManagerModalComponent } from './modals/new-hiring-manager-modal/new-hiring-manager-modal.component';
import { NewEmployeeComponent } from './modals/new-employee/new-employee.component';
import { NewJobComponent } from './modals/new-job/new-job.component';
import { HiringManagersComponent } from './hiring-managers/hiring-managers.component';
import { JobsComponent } from './jobs/jobs.component';
import { StatsComponent } from './stats/stats.component';
import { TrackResponsesComponent } from './track-responses/track-responses.component';
import { CompanyResolver } from './company/company.resolver';
import { HiringManagersResolver } from './hiring-managers/hiring-managers.resolver';
import { JobsResolver } from './jobs/jobs.resolver';

export const appRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'company', pathMatch: 'full' },
      { path: 'company', component: CompanyComponent, resolve: { CompanyResolver: CompanyResolver } },
      { path: 'new-company', component: NewCompanyModalComponent },
      { path: 'hiring-manager/:company', component: HiringManagersComponent, resolve: { HiringManagersResolver: HiringManagersResolver } },
      { path: 'new-hiring-manager', component: NewHiringManagerModalComponent },
      { path: 'jobs/:manager', component: JobsComponent, resolve: { JobsResolver: JobsResolver } },
      { path: 'new-employee', component: NewEmployeeComponent },
      { path: 'new-job', component: NewJobComponent },
      { path: 'stats', component: StatsComponent },
      { path: 'track-responses', component: TrackResponsesComponent }
    ]
  }
];
