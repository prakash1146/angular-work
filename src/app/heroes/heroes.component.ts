import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers:[HeroService]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(private _heroService:HeroService,
    private __MessageService : MessageService,
    private route:ActivatedRoute,
    private router: Router){}

  ngOnInit(){
    this.getherosfromService()
  }

  getherosfromService(){
    this.__MessageService.add('---------------HeroService: fetched heroesasda asd ds---------------');
      this._heroService.getHeroList().subscribe(heroData=>{
        this.heroes = heroData;
      })}
    
  navigateTodetails(heroId:number){
        console.log("id clcikeed----------->>",heroId);
        this.router.navigate(['/detail',heroId]);
  }   
}
