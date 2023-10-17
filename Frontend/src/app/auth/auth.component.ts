import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor( 
    private authService: AuthService,
    private router: Router,
    ) {}
   
  userData = {
    email: '',
    password: ''
  };

  submitted = false;

  signIn() {

    this.submitted = true;

    if ( this.userData.email && this.userData.password) {
      // Run logic here to send data
      console.log('Sending data:', this.userData);
    }
    return false
  };
  //Add authorization user method after setting up MongoDB
}

