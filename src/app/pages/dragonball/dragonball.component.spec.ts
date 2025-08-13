import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonballComponent } from './dragonball.component';

describe('DragonballComponent', () => {
  let component: DragonballComponent;
  let fixture: ComponentFixture<DragonballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonballComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DragonballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
