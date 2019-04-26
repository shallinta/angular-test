import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      tap((term: string) => console.log('searching A: ', term)),
      debounceTime(300),
      distinctUntilChanged(),
      tap((term: string) => console.log('searching B: ', term)),
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

}
