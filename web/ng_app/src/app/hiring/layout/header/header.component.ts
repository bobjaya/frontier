import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../shared/auth.service';
import { RecipientsService } from '../../shared/recipients.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private recipientService: RecipientsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  resetTour() {
    this.recipientService.welcomeTourReset = false;
    this.recipientService.currentSlide = 0;
  }

  changePassword() {
    this.router.navigate(['hiring/change-password']);
  }

}
