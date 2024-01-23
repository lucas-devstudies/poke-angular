import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment'
import { PokemonData } from '../models/pokemonData';

@Injectable({
  providedIn: 'root'
})

export class PokemonServiceService {
  private baseURL:string = ""
  private pokeData:PokemonData | any

  constructor(
    private http:HttpClient /*diferente do HttpClientModule */
  ) { 
    this.baseURL = environment.pokeApi //passando pra baseURL o valor da variável pokeApi em environments
  }
  getPokemon(pokemonName:string) : Observable<PokemonData>{
    this.pokeData = this
                    .http
                    .get<PokemonData>
                    (`${this.baseURL}${pokemonName}`)  /*preciso da url*/
    
    return this.pokeData
  }
}
