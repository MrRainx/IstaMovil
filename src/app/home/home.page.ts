import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Personas } from 'src/services/models';
import { GraphqlService } from "src/services/services";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

@Injectable({
  providedIn: 'root'
})

export class HomePage {

  public personas: Personas[];

  public persona: Personas;

  constructor(private service: GraphqlService) { 
    
  }
  ngOnInit(): void {
    this.service.getPersonas();
  }
}
