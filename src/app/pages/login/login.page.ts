import { Component, OnInit, Host } from '@angular/core';
import { Injectable } from '@angular/core';
import { UsuarioService } from 'src/app/services/Usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/Usuario';
import { MenuController } from '@ionic/angular';
import { AppComponent } from '../../app.component';


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
    username: '1900858216',
    password: '1900858216'
  }


  constructor(
    private usuarioServ: UsuarioService,
    private router: Router,
    public menuCtrl: MenuController,
    @Host() private app: AppComponent
  ) {
  }

  async ngOnInit() {
    this.app.showMenu = true;
  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }


  async onSubmitTemplate() {
    this.usuario = await this.usuarioServ.login(this.user.username, this.user.password);
    console.log(this.usuario);
    if (this.usuario != null) {
      this.router.navigate(['form-notas', this.usuario.persona.identificacion]);
    }

  }




}
