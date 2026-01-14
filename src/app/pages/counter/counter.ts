import { Component, signal } from "@angular/core";



@Component({  
  selector: "counter-page",
  templateUrl: "./counter.html",
  styleUrls: ["./counter.css"]
})

export class Counter {
  counter = 0;
  CounterSignal = signal(0);
  
  increaseBy(value: number) {
    this.counter += value; 
    this.CounterSignal.update(currentValue => currentValue + value); // Actualiza el valor de la señal
  }
  decreaseBy(value: number) {
    this.counter -= value;
    this.CounterSignal.update(currentValue => currentValue - value); // Actualiza el valor de la señal
  }
  resetCounter() {
    this.counter = 0;
    this.CounterSignal.set(0); // Reset el valor de la señal a 0
  }
}