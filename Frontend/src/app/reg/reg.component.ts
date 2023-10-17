import { Component} from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent {
   
  userData = {
    name: '',
    email: '',
    password: ''
  };

  signUp() {
    const user = {
      name: this.userData.name,
      email: this.userData.email,
      password: this.userData.password,
    }
    console.log(user)
    return false
  };
}


export interface IUserSignIn {
  name: string
  login: string
  email: string
  password: string
}