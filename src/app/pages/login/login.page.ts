import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { UsuarioType, UsuarioService } from 'src/services/Usuario';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


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
  public usuarioIn: string = "ROOT";
  public passwordIn: string = "WARMANDOCUTULO";
  constructor(private apollo: UsuarioService, private router: NavController) {
  }

  async ngOnInit() {


  }

  async btnIngresar(usuario: HTMLInputElement, password: HTMLInputElement) {

    let usuarioText: String = await this.input(usuario);
    let passwordText: String = await this.input(password);

    this.usuario = await this.apollo.login(usuarioText, passwordText);


    if (this.usuario != null) {
      
    }
    return false;
  }

  private input(input: HTMLInputElement): String {
    if (input == null) {

      console.log(input.value)

      return "";
    } else {
      return input.value;
    }
  }

}
