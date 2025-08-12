import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  nameSignal = signal('Ironman');
  ageSignal = signal(23);
  heroDescription = computed(() => {
    return `${this.nameSignal()} + ${this.ageSignal()}`;
  });
  name() {
    return `${this.nameSignal().toUpperCase()}`;
  }
  age() {
    return `${this.ageSignal()}`;
  }
  getHeroDescription() {
    return `${this.nameSignal()} + ${this.ageSignal()}`;
  }
  changeHero() {
    this.nameSignal.update(() => 'Superman');
    this.ageSignal.update(() => 22);
  }
  resetForm() {
    this.nameSignal.set('Ironman');
    this.ageSignal.set(45);
  }
  changeAge() {
    this.ageSignal.update(() => 60);
  }
}
