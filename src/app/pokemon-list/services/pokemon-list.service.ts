import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ENTER, EXIT, EXITITEM} from '../models/pokemon-list.model';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PokemonListService {

  constructor(private http: HttpClient) {
  }


  public getPokeList(url = `https://pokeapi.co/api/v2/pokemon`): Observable<EXIT> {

    return this.http.get<ENTER>(url)
      .pipe(map((response: ENTER) => {
      const responseUpdated: EXIT = {
        next: response.next,
        results: [],
      };

      response.results.forEach((item) => {
        const id1 = this.getIdByUrl(item.url);
        const itemUpdated: EXITITEM = {
          id: id1,
          name: item.name,
          url: item.url,
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + id1 + '.png',
          type: item.type
        };
        responseUpdated.results.push(itemUpdated);
      });

      return responseUpdated;
    }));
  }

  private getIdByUrl(url: string): number {
    const id = url.slice(34, (url.length - 1));
    // tslint:disable-next-line:radix
    return parseInt(id);
  }

  getNextPokeList(nextUrl: string) {
    try {
      return this.http.get<EXIT>(nextUrl).toPromise();
    } catch (error) {}
  }
}
