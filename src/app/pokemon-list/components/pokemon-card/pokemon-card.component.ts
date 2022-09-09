import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EXITITEM} from '../../models/pokemon-list.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon: EXITITEM;
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

}
