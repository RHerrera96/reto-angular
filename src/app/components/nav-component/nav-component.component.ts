import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.scss']
})
export class NavComponentComponent implements OnInit {

  constructor(public authService: AuthServiceService, private route : Router) { }

  ngOnInit(): void {
  }

  logueado(){
    return this.authService.isLoggedIn;
  }

  logOut(){
    this.authService.SignOut();
  }

}
