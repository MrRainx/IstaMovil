import { Component, OnInit, OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { UsuarioService } from 'src/app/services/Usuario.service';
import { Router } from '@angular/router';
import { UsuarioType } from 'src/app/interfaces/Usuario';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})

@Injectable({
  providedIn: 'root'
})

export class LoginPage implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  public usuario: UsuarioType;

  public user = {
    username: 'ROOT',
    password: 'WARMANDOCUTULO'
  }


  constructor(private usuarioServ: UsuarioService, private router: Router) {
  }

  async ngOnInit() {


  }

  private async onSubmitTemplate() {
    this.usuario = await this.usuarioServ.login(this.user.username, this.user.password);
    if (this.usuario != null) {

      console.log(this.usuarioServ.getUserFromJSON());

      this.router.navigate(['inicio'], {
        state: {
          user: this.usuario
        }
      });
    } else {

    }
    return false;

  }




}
