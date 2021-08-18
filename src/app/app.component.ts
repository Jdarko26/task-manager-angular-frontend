import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 title = 'TM-Frontend-Angular';
  constructor(private authservice:AuthService, private router:Router) {
    
  }
  ngOnInit() {
    if (this.authservice.isUserLoggedIn()) {
      this.router.navigate(['/task']);
    }
  }
 
}
