import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonListRoutingModule } from './pokemon-list-routing.module';
import {PokemonListComponent} from './components/pokemon-list/pokemon-list.component';
import {PokemonComponent} from './containers/pokemon/pokemon.component';
import {FormsModule} from '@angular/forms';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonComponent,
    PokemonCardComponent
  ],
  imports: [
    CommonModule,
    PokemonListRoutingModule,
    FormsModule,
  ]
})
export class PokemonListModule { }
