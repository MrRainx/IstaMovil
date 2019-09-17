import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginService } from './pages/login/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  public showMenu: boolean;

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loginSrv: LoginService,
    private router: Router
  ) {
    this.initializeApp();
  }


  ngOnInit() {
    const user = this.loginSrv.getUserLoggedIn()
    if (user == null) {
      this.showMenu = false;
      this.router.navigate(['login'])
    } else {
      this.router.navigate(['home'])
      this.showMenu = true;
    }

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  cerrarSesion() {
    this.loginSrv.LOGOUT()
    window.location.reload()
  }



}
