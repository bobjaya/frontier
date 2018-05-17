import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserAuthService } from '../../shared/user-auth.service';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.sass']
})
export class ChangePasswordComponent implements OnInit {

  pwdChangeForm: FormGroup = new FormGroup({
    oldPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
    pwdConfirm: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(
    public authService: AuthService,
    private userAuthService: UserAuthService,
    private router: Router
  ) { }

  errorMsg = '';
  errorFlag = false;

  ngOnInit() {
  }

  save() {
    const data = {
      email: this.authService.userData.user.email,
      old_password: this.pwdChangeForm.controls.oldPassword.value,
      new_password: this.pwdChangeForm.controls.newPassword.value
    };
    this.userAuthService.changePassword(data).subscribe((res) => {
      /// update user info if necessary
      this.authService.logout();
      return;
    }, ((err) => {
      this.errorFlag = true;
      this.errorMsg = err.error.error;
    }));
  }

}
