import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonballComponent } from './pages/dragonball/dragonball.component';

export const routes: Routes = [
  { path: 'counter', component: CounterPageComponent },
  { path: 'hero', component: HeroPageComponent },
  { path: 'dragonball', component: DragonballComponent },
  { path: '**', redirectTo: 'counter' },
];
