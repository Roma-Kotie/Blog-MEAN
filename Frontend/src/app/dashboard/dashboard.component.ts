import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor( 
    private authService: AuthService,
    private router: Router,
    ) {}

  post = {
    title: '',
    text: '',
    photo: '',
    //autor: localStorage.getItem("user.name"),
    //date: new Date() 
  };
  
  createPost() {

    if (this.post.photo && this.post.text && this.post.title) {
      // Run logic here to send data
      console.log('Sending data:', this.post);
      this.router.navigate(['']);
    }
    return false
  };
    
  
}
