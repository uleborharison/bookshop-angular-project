import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: LoginForm = {
    email: '',
    password: '',
    confirm_password: ''
  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  submit() {
    this.authService.login(this.form);
  }
  isLoading() {
    return this.authService.isLoading
  }
}
