import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  message: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    const validEmail = 'example@example.com';
    const validPassword = 'password';

    if (this.email === validEmail && this.password === validPassword) {
      this.router.navigate(['/home']);
    } else {
      this.message = 'Invalid email or password. Please try again.';
    }
  }
}
