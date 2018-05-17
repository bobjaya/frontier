import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { appRoutes } from './admin.routing';
import { CompanyComponent } from './company/company.component';
import { NewCompanyModalComponent } from './modals/new-company-modal/new-company-modal.component';
import { HiringManagersComponent } from './hiring-managers/hiring-managers.component';
import { NewHiringManagerModalComponent } from './modals/new-hiring-manager-modal/new-hiring-manager-modal.component';
import { NewEmployeeComponent } from './modals/new-employee/new-employee.component';
import { JobsComponent } from './jobs/jobs.component';
import { NewJobComponent } from './modals/new-job/new-job.component';
import { APP_BASE_HREF } from '@angular/common';
import { StatsComponent } from './stats/stats.component';
import { TrackResponsesComponent } from './track-responses/track-responses.component';
import { AngularDependenciesModule } from '../shared/angular-dependencies.module';
import { NgSelectModule } from '@ng-select/ng-select';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CompanyComponent,
        AdminComponent,
        HeaderComponent,
        NewCompanyModalComponent,
        HiringManagersComponent,
        NewHiringManagerModalComponent,
        NewEmployeeComponent,
        JobsComponent,
        NewJobComponent,
        StatsComponent,
        TrackResponsesComponent
      ],
      imports: [
        AngularDependenciesModule,
        RouterModule.forRoot(appRoutes),
        NgSelectModule],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
