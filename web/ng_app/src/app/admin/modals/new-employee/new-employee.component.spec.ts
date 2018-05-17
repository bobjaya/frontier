import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmployeeComponent } from './new-employee.component';
import { AngularDependenciesModule } from '../../../shared/angular-dependencies.module';
import { AdminService } from '../../../shared/admin.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../../admin.routing';
import { JobsComponent } from '../../jobs/jobs.component';
import { CompanyComponent } from '../../company/company.component';
import { AdminComponent } from '../../admin.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { HiringManagersComponent } from '../../hiring-managers/hiring-managers.component';
import { StatsComponent } from '../../stats/stats.component';
import { NewJobComponent } from '../new-job/new-job.component';
import { NewHiringManagerModalComponent } from '../new-hiring-manager-modal/new-hiring-manager-modal.component';
import { TrackResponsesComponent } from '../../track-responses/track-responses.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { APP_BASE_HREF } from '@angular/common';
import { NewCompanyModalComponent } from '../new-company-modal/new-company-modal.component';

describe('NewEmployeeComponent', () => {
  let component: NewEmployeeComponent;
  let fixture: ComponentFixture<NewEmployeeComponent>;

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
        { provide: APP_BASE_HREF, useValue: '/' }]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
