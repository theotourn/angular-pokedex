import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServPokeapiService } from 'src/app/services/serv-pokeapi/serv-pokeapi.service';

@Component({
  selector: 'app-route-pokemon',
  templateUrl: './route-pokemon.component.html',
  styleUrls: ['./route-pokemon.component.scss'],
})
export class RoutePokemonComponent implements OnInit {
  public pokemon: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private servPokeapi: ServPokeapiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getPokemon('https://pokeapi.co/api/v2/pokemon/' + params['id']);
    });
  }

  private getPokemon(endPoint: string) {
    this.servPokeapi.getData(endPoint, (res: any) => {
      console.log(res);
      this.pokemon = res;
    });
  }
  public changePokemon(id: any) {
    this.router.navigateByUrl('pokemon/' + id);
  }
}
