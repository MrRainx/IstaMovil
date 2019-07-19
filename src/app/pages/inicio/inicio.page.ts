import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioType } from 'src/services/Usuario';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuario: UsuarioType = null;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.usuario = this.activeRoute.snapshot.paramMap.get('usuario') as UsuarioType;
  }

}
