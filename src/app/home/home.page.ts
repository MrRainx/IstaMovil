import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { PersonaType, GraphqlService } from 'src/services/Persona';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

@Injectable({
  providedIn: 'root'
})

export class HomePage implements OnInit {

  public persona: PersonaType;

  constructor(private apollo: GraphqlService) {
  }

  async ngOnInit() {
    this.persona = await this.apollo.getPersona("0104925789");
    console.log(this.persona)
  }

  public ingresar() {

  }


}
