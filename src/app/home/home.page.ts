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

    this.usuario = await this.apollo.login("ROOT", "WARMANDOCUTULO");
    console.log(this.usuario)

  }



  public ingresar() {


  }
}
