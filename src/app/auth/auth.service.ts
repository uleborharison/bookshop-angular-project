import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { LoginForm } from '../types/auth';
import { RegisterForm } from '../types/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  isLoading: boolean = false;
  passwordMatched: boolean = true;

  constructor(private router: Router) { }
  login(form: LoginForm) {
    if (this.isLoading) return;
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {

        // Signed in 

        this.isAuthenticated = true;
        this.router.navigate([''])
        // const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
      }).finally(() => (this.isLoading = false));
    //console.log('credentials does not match our records');


  }
  register(form: LoginForm) {
    if (this.isLoading) return;
    this.isLoading = true;
    if (form.password !== form.confirm_password) {
      this.passwordMatched = false;
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
        // // Signed in 

        alert("Your Registration was Successful");


      })
      .catch((error) => {
        this.isAuthenticated = false;

        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Your Registration was Not Successful");

      }).finally(() => (this.isLoading = false));;
  }


  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(['login']);
      this.isAuthenticated = false;
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
}

