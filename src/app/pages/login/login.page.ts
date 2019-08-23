import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { UsuarioService } from 'src/app/services/Usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/Usuario';


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
    username: '0103156675',
    password: '1234'
  }


  constructor(private usuarioServ: UsuarioService, private router: Router) {
  }

  async ngOnInit() {


  }

  async onSubmitTemplate() {
    this.usuario = await this.usuarioServ.login(this.user.username, this.user.password);
    console.log(this.usuario);
    if (this.usuario != null) {
      this.router.navigate(['form-notas', this.usuario.persona.identificacion]);
    }

  }




}
