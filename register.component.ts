import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}
  
  onSubmit() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }
    
    if (!this.isValidEmail(this.email)) {
      this.errorMessage = 'Invalid email address.';
      return;
    }

    if (this.password.length < 8) {
      this.errorMessage = 'The password must be at least 8 characters long.';
      return;
    }

    console.log('Email:', this.email);
    console.log('Password:', this.password);

    this.router.navigate(['/home']);
  }

  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
}
