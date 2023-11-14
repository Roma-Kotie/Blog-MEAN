import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor( 
    private authService: AuthService,
    private router: Router,
    ) {}
  
  logoutUser() {
    this.authService.logout()
    console.log('You are logget out');
    this.router.navigate(['/auth'])
  }
}
