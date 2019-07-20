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

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['usuario']) {
        console.log("SI EXISTE")
      } else {
        console.log("NO EXISTE")
      }
    });
  }

}
