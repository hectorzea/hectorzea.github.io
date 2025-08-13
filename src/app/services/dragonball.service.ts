import { effect, Injectable, signal } from '@angular/core';
import { Hero } from '../types/hero.interface';

const loadFromLocalStorage = (): Hero[] => {
  const heroes = localStorage.getItem('heroes') ?? '';
  return heroes ? JSON.parse(heroes) : [];
};

@Injectable({
  providedIn: 'root',
})
export class DragonballService {
  heroes = signal<Hero[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    console.log(`Hero Count ${this.heroes().length}`);
    localStorage.setItem('heroes', JSON.stringify(this.heroes()));
  });

  addHero(hero: Hero) {
    this.heroes.update((prevList) => [...prevList, hero]);
  }
}
