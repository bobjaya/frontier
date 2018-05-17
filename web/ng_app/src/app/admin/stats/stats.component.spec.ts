import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsComponent } from './stats.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../admin.routing';
import { JobsComponent } from '../jobs/jobs.component';
import { CompanyComponent } from '../company/company.component';
import { AdminComponent } from '../admin.component';
import { HeaderComponent } from '../layout/header/header.component';
import { HiringManagersComponent } from '../hiring-managers/hiring-managers.component';
import { NewEmployeeComponent } from '../modals/new-employee/new-employee.component';
import { TrackResponsesComponent } from '../track-responses/track-responses.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { APP_BASE_HREF } from '@angular/common';
import { NewCompanyModalComponent } from '../modals/new-company-modal/new-company-modal.component';
import { HiringManagerService } from '../shared/hiring-manager.service';
import { AngularDependenciesModule } from '../../shared/angular-dependencies.module';
import { NewHiringManagerModalComponent } from '../modals/new-hiring-manager-modal/new-hiring-manager-modal.component';
import { NewJobComponent } from '../modals/new-job/new-job.component';
import { AdminService } from '../../shared/admin.service';

describe('StatsComponent', () => {
  let component: StatsComponent;
  let fixture: ComponentFixture<StatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularDependenciesModule,
        RouterModule.forRoot(appRoutes),
        NgSelectModule],
      declarations: [
        JobsComponent,
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
        TrackResponsesComponent ],
      providers: [AdminService,
        HiringManagerService,
        { provide: APP_BASE_HREF, useValue: '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
