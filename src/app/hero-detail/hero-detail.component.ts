import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers:[HeroService]
})
export class HeroDetailComponent implements OnInit {
  hero :Hero ;
  constructor(private _location : Location, private _heroService : HeroService) { }

  ngOnInit() {
    let currPath = this._location.path();
    let a = currPath.substring(currPath.lastIndexOf('/')+1,currPath.length);
    console.log('idd--------',a);
      this.getSelectedHeroDetail(a);

  }

  getSelectedHeroDetail(a:string){
    this.hero = this._heroService.getHeroIndividual(a)[0];
  }

}
