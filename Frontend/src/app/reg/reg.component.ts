import { Component} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent {

  constructor( 
    private authService: AuthService,
    private router: Router,
    ) {}
   
  userData = {
    name: '',
    email: '',
    password: ''
  };

  submitted = false;

  signUp() {

    this.submitted = true;

    if (this.userData.name && this.userData.email && this.userData.password) {
      // Run logic here to send data
      console.log('Sending data:', this.userData);
    }
    return false
  };
// Add register user method after setting up MongoDB
}

