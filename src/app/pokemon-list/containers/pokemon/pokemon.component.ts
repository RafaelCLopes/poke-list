import {Component, Input, OnInit} from '@angular/core';
import {PokemonListService} from "../../services/pokemon-list.service";
import {ENTER, EXIT, EXITITEM} from '../../models/pokemon-list.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon: EXITITEM;

  public next = '';
  public pokeList
  constructor(
    private pokemonListService: PokemonListService
  ) { }

  ngOnInit() {
    this.pokemonListService.getPokeList().subscribe(data => {
      this.pokeList = data.results;
      this.next = data.next;
    });
  }

  show(pokemon: EXITITEM) {
    console.log(pokemon);
  }

  openModalPoke(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('mostrar');
  }

  closeModalPoke(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
  }

  showNextPoke() {
    this.pokemonListService.getPokeList(this.next).subscribe(data => {
      this.pokeList = [...this.pokeList, ...data.results];
      this.next = data.next;
    });
  }
}
