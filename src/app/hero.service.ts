import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {
  constructor(private _MessageService : MessageService) { }

  getHeroList() : Observable<Hero[]>{
    this._MessageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  getHeroIndividual(id): any{
    this._MessageService.add('--Getting Individual Hero Details--');
    // this.indiHero = HEROES.filter(hero => {
    //   return  hero.id === parseInt(id);
    // });
    return HEROES.filter(hero => {
      return  hero.id === parseInt(id);
    });;
  }

}
