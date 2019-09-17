import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/Usuario';
import { LoginService } from './services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})

@Injectable({
  providedIn: 'root'
})

export class LoginPage implements OnInit {

  public usuario: Usuario;

  public user = {
    username: '',
    password: ''
  }


  constructor(
    private usuarioServ: LoginService,
    private router: Router,
  ) {
  }

  async ngOnInit() {

  }


  async onSubmitTemplate() {
    this.usuario = await this.usuarioServ.login(this.user.username, this.user.password);
    console.log(this.usuario);
    if (this.usuario != null) {
      this.router.navigate(['home']);
      window.location.reload()
    }

  }




}
