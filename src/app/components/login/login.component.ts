import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
   
  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    if (!this.username) {
     alert('please enter a name')
      return;
   }
    if (!this.password) {
     alert('please add password')
      return;
    }
    const response = this.authService.login(this.username, this.password);
    if (response.status) {
      this.router.navigateByUrl('task');
    } else {
      alert('username or password is incorrect');
    
    }
    
  }

}
