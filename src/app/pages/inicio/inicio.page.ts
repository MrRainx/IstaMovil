import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioType } from 'src/services/Usuario';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuario: UsuarioType = null;
  data: any;
  constructor(private route: ActivatedRoute, private router: Router) {

    try {
      this.usuario = this.router.getCurrentNavigation().extras.state.user as UsuarioType;
    } catch (error) {
      console.error(error)
    }


  }

  async ngOnInit() {

  }

}
