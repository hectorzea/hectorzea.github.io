import { Component, input } from '@angular/core';
import type { Hero } from '../../../types/hero.interface';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
})
export class HeroListComponent {
  title = input.required<string>();
  heroes = input.required<Hero[]>();
}
