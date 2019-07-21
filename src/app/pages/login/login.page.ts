import { Component, OnInit, OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { UsuarioType, UsuarioService } from 'src/services/Usuario';
import { Router } from '@angular/router';


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
    username: '',
    password: ''
  }


  constructor(private apollo: UsuarioService, private router: Router) {
  }

  async ngOnInit() {


  }

  async onSubmitTemplate() {
    console.log("ENVIADO")
    this.usuario = await this.apollo.login(this.user.username, this.user.password);

    if (this.usuario != null) {
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
