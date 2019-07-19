import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { UsuarioType, UsuarioService } from 'src/services/Usuario';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})

@Injectable({
  providedIn: 'root'
})

export class LoginPage implements OnInit {

  public usuario: UsuarioType;

  constructor(private apollo: UsuarioService) {
  }

  async ngOnInit() {


  }

  async btnIngresar(usuario: HTMLInputElement, password: HTMLInputElement) {
    this.usuario = await this.apollo.login(usuario.value, password.value);
    console.log(this.usuario)
    return false;
  }
}
