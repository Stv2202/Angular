import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
interface Character { // Definición de la interfaz Character
  id: number;
  name: string;
  powerLevel: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [NgClass],
  templateUrl: './dragonball.html',
})
export class Dragonball {
  characters = signal<Character[]>([ // Señal para almacenar los personajes
    {id: 1, name: 'Goku', powerLevel: 9001},
    {id: 2, name: 'Vegeta', powerLevel: 8500},
    {id: 3, name: 'Piccolo', powerLevel: 3000},
    {id: 4, name: 'Yamcha', powerLevel: 500},
  ]);

  // powerClasses = computed (() =>{
  //   return {
  //     'text-danger': true,
  //   };
  // });
}
