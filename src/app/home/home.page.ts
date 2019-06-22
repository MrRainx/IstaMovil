import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { GraphqlService } from "src/services/services";
import { PeopleType } from 'src/services/PeopleType';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

@Injectable({
  providedIn: 'root'
})

export class HomePage implements OnInit {

  public personas: Array<PeopleType>;

  public persona: PeopleType;

  public title: string;

  constructor(private service: GraphqlService) {

  }

  ngOnInit(): void {

    this.service.getPersona().subscribe(res => {
        this.persona = res.data as PeopleType;
        console.log(this.persona)
      });


  }
}
