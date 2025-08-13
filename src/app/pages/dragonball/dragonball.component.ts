import { Component, inject, signal } from '@angular/core';
import { HeroListComponent } from '../../components/dragonball/hero-list/hero-list.component';
import { Hero } from '../../types/hero.interface';
import { HeroFormComponent } from '../../components/dragonball/hero-form/hero-form.component';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball',
  imports: [HeroListComponent, HeroFormComponent],
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.css',
})
export class DragonballComponent {
  // forma vieja
  // constructor(public dragonBallService: DragonballService){}
  public dragonBallService = inject(DragonballService);
}
