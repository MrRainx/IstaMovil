import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { UsuarioType, UsuarioService } from 'src/services/Usuario';
import { Router, NavigationExtras } from '@angular/router';


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
  constructor(private apollo: UsuarioService, private router: Router) {
  }

  async ngOnInit() {


  }

  async btnIngresar(usuario: HTMLInputElement, password: HTMLInputElement) {

    this.usuario = await this.apollo.login(usuario.value, password.value);

    console.log("BTN INGRESAR")

    if (this.usuario != null) {
      let navigationExtras: NavigationExtras = {
        state: {
          usuario: this.usuario
        }
      };

      this.router.navigate(['inicio'], navigationExtras);
    } else {
    }
    return false;
  }

}
