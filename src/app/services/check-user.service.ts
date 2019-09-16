import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { LoginService } from '../pages/login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class CheckUserService implements CanLoad {

  constructor(
    private loginSrv: LoginService,
    private router: Router
  ) { }

  canLoad() {

    const user = this.loginSrv.getUserLoggedIn();
    if (user != null) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
