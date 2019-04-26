import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const heroes = [
      { id: 1, name: 'Mr. Nice', url: 'https://tuimeizi.cn/pure?w=300&h=450&o=1' },
      { id: 2, name: 'Narco', url: 'https://tuimeizi.cn/pure?w=300&h=450&o=2' },
      { id: 3, name: 'Bombasto', url: 'https://tuimeizi.cn/pure?w=300&h=450&o=3' },
      { id: 4, name: 'Celeritas', url: 'https://tuimeizi.cn/pure?w=300&h=450&o=4' },
      { id: 5, name: 'Magneta', url: 'https://tuimeizi.cn/pure?w=300&h=450&o=5' },
      { id: 6, name: 'Rubber Manmo', url: 'https://tuimeizi.cn/pure?w=300&h=450&o=6' },
      { id: 7, name: 'Dynama', url: 'https://tuimeizi.cn/pure?w=300&h=450&o=7' },
      { id: 8, name: 'Dr IQ', url: 'https://tuimeizi.cn/pure?w=300&h=450&o=8' },
      { id: 9, name: 'Magma', url: 'https://tuimeizi.cn/pure?w=300&h=450&o=9' },
      { id: 10, name: 'Tornado', url: 'https://tuimeizi.cn/pure?w=300&h=450&o=10' }
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
