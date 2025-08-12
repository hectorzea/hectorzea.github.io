import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10);
  increaseBy(value: number) {
    // cuando tenemos que actualizar el valor de una señal pero dependemos del valor anterior usamos un  UPDATE
    this.counter = this.counter + value;
    this.counterSignal.update((curVal: number) => curVal + value);
  }
  decreaseBy(value: number) {
    // cuando tenemos que actualizar el valor de una señal pero dependemos del valor anterior usamos un  UPDATE
    this.counter = this.counter - value;
    this.counterSignal.update((curVal: number) => curVal - value);
  }
  resetCounter(value: number) {
    this.counter = 0;
    // no dependemos del valor anterior, por ende SET es valido aqui en signals.
    this.counterSignal.set(0);
  }
}
