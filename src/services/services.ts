import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import gql from 'graphql-tag';


@Injectable({
  providedIn: 'root',
})
export class GraphqlService {



  constructor(private apollo: Apollo) {
  }
}
