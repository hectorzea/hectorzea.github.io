import { Component, signal, output } from '@angular/core';
import { Hero } from '../../../types/hero.interface';

@Component({
  selector: 'hero-form',
  imports: [],
  templateUrl: './hero-form.component.html',
})
export class HeroFormComponent {
  nameSignal = signal('');
  powerSignal = signal(0);

  newHero = output<Hero>();

  addHero() {
    const hero: Hero = {
      id: Math.floor(Math.random() * 3000000),
      name: this.nameSignal(),
      power: this.powerSignal(),
    };
    console.log(hero);
    this.newHero.emit(hero);
    // this.heroes.update((prevHeroes) => [...prevHeroes, hero]);
    this.resetFields();
  }

  resetFields() {
    this.nameSignal.set('');
    this.powerSignal.set(0);
  }
}
