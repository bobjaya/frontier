import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserAuthService } from '../../shared/user-auth.service';


@Component({
  selector: 'reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.sass']
})
export class ResetPasswordComponent implements OnInit {

  pwdResetForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(
    public authService: AuthService,
    public userAuthService: UserAuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  errorMsg = '';
  errorFlag = false;
  userData;

  ngOnInit() {
    this.userData = this.activatedRoute.snapshot.data.LoginResolver;
    if (this.userData.user.email) {
      this.pwdResetForm.controls.email.setValue(this.userData.user.email);
      this.pwdResetForm.controls.email.disable();
    }
  }

  reset() {
    const data = {
      email: this.pwdResetForm.controls.email.value
    };
    this.userAuthService.resetPassword(data).subscribe((res) => {
      /// update user info if necessary
      this.authService.logout();
      return;
    }, ((err) => {
      this.errorFlag = true;
      this.errorMsg = err.error.error;
    }));
  }

}
