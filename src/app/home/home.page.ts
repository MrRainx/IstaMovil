import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { UsuarioType, UsuarioService } from 'src/services/Usuario';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

@Injectable({
  providedIn: 'root'
})

export class HomePage implements OnInit {

  public usuario: UsuarioType;

  constructor(private apollo: UsuarioService) {
  }

  async ngOnInit() {


  }



  async public btnIngresar(usuario, password) {
    this.usuario = await this.apollo.login(usuario.value, password.value);
    console.log(this.usuario)

  }
}
