import { Injectable } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

import { Resolve } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { JobService } from '../../shared/job.service';
import { UserType } from '../../shared/models/user'

@Injectable()
export class LandingPageResolver implements Resolve<any> {
    constructor(private authService: AuthService,
        private router: Router,
        private jobService: JobService) { }

    resolve(route: ActivatedRouteSnapshot) {
        const loggedInUser = this.authService.getUserFromCache();
        if (loggedInUser.user.type === UserType.HIRING_MANAGER) {
            return this.authService.userData;
        }
        if (this.authService.userData.survey_response.token) {
            return this.authService.getApplicantType(this.authService.userData.survey_response.token);
        }
        return false;
    }
}
