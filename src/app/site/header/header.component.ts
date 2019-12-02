import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  getUser(){
    return this.authService.loggedInUser
  }

  isAdmin()
  {
    return this.authService.isAdmin
  }
}
