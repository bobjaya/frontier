import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJobComponent } from './new-job.component';
import { AdminService } from '../../../shared/admin.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../../admin.routing';
import { JobsComponent } from '../../jobs/jobs.component';
import { CompanyComponent } from '../../company/company.component';
import { AdminComponent } from '../../admin.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { HiringManagersComponent } from '../../hiring-managers/hiring-managers.component';
import { StatsComponent } from '../../stats/stats.component';
import { NewEmployeeComponent } from '../new-employee/new-employee.component';
import { TrackResponsesComponent } from '../../track-responses/track-responses.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { APP_BASE_HREF } from '@angular/common';
import { NewCompanyModalComponent } from '../new-company-modal/new-company-modal.component';
import { HiringManagerService } from '../../shared/hiring-manager.service';
import { AngularDependenciesModule } from '../../../shared/angular-dependencies.module';
import { NewHiringManagerModalComponent } from '../new-hiring-manager-modal/new-hiring-manager-modal.component';

describe('NewJobComponent', () => {
  let component: NewJobComponent;
  let fixture: ComponentFixture<NewJobComponent>;

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
    fixture = TestBed.createComponent(NewJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
