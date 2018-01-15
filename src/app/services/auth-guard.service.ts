import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authservice: AuthService) { }

  canActivate(){
    if(this.authservice.isLoggedIn()) return true;

    this.router.navigate(['/login']);
    return false;
    
  }
}
