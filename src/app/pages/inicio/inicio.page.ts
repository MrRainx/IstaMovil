import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioType } from 'src/app/interfaces/Usuario';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public usuario: UsuarioType;
  public data: any;

  constructor(private route: ActivatedRoute) {

  }

  async ngOnInit() {
    try {

      this.usuario = await this.route.queryParams.toPromise().then(data => data)

    } catch (error) {

    }
  }

}
