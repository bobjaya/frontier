import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyComponent } from './company.component';
import { RouterModule } from '@angular/router';
import { AngularDependenciesModule } from '../../shared/angular-dependencies.module';
import { appRoutes } from '../admin.routing';
import { AdminComponent } from '../admin.component';
import { HeaderComponent } from '../layout/header/header.component';
import { NewCompanyModalComponent } from '../modals/new-company-modal/new-company-modal.component';
import { HiringManagersComponent } from '../hiring-managers/hiring-managers.component';
import { NewHiringManagerModalComponent } from '../modals/new-hiring-manager-modal/new-hiring-manager-modal.component';
import { JobsComponent } from '../jobs/jobs.component';
import { NewEmployeeComponent } from '../modals/new-employee/new-employee.component';
import { NewJobComponent } from '../modals/new-job/new-job.component';
import { TrackResponsesComponent } from '../track-responses/track-responses.component';
import { StatsComponent } from '../stats/stats.component';
import { APP_BASE_HREF } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { AdminService } from '../../shared/admin.service';

describe('CompanyComponent', () => {
  let component: CompanyComponent;
  let fixture: ComponentFixture<CompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(appRoutes),
        AngularDependenciesModule,
        NgSelectModule
      ],
      declarations: [ CompanyComponent,
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
        providers: [
          AdminService,
          { provide: APP_BASE_HREF, useValue: '/' }
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
