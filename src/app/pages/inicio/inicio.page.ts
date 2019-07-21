import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioType } from 'src/app/interfaces/Usuario';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuario: UsuarioType;
  data: any;
  constructor(private router: Router) {
    try {
      this.usuario = this.router.getCurrentNavigation().extras.state.user as UsuarioType;
    } catch (error) {
      this.router.navigate(['inicio']);
    }

  }

  async ngOnInit() {

  }

}
