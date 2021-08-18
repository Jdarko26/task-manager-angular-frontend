import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }


  login(username: string, password: string) {
    this.setSession(username);
    //you can make a fetch call to an api before loggin in a user
    //return data from fetch call assuming success
    return {
      status: 200, message: "Login success"
    }
 
  };
  setSession(username: string) {
    const user = { username: username }
    localStorage.setItem("user", JSON.stringify(user));
  }
  logout() {
   // console.log("called");
    localStorage.removeItem("user");
  }
  isUserLoggedIn() {
    const user = JSON.parse(localStorage.getItem("user"));
    return user !== null;
  }
}
