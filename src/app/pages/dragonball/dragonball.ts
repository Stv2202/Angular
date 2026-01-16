import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
interface Character { // Definición de la interfaz Character
  id: number;
  name: string;
  powerLevel: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.html',
})
export class Dragonball {

  name = signal(''); // Señal para almacenar el nombre del nuevo personaje
  power = signal(0); // Señal para almacenar el poder del nuevo personaje


  characters = signal<Character[]>([ // Señal para almacenar los personajes
    {id: 1, name: 'Goku', powerLevel: 9001},
    // {id: 2, name: 'Vegeta', powerLevel: 8500},
    // {id: 3, name: 'Piccolo', powerLevel: 3000},
    // {id: 4, name: 'Yamcha', powerLevel: 500},
  ]);

  addCharacter(): void {
    if(!this.name() || this.power() <= 0 || !this.power()) {
      return; // Validación básica: no agregar si el nombre está vacío o el poder es menor o igual a 0
    }

    const newCharacter: Character = {
      id: this.characters().length + 1, // Asigna un ID basado en la longitud actual del arreglo
      name: this.name(), // Obtiene el nombre desde la señal
      powerLevel: this.power(), // Obtiene el poder desde la señal
    };
    this.characters.update((characters) => [...characters, newCharacter]); // Actualiza la señal con el nuevo personaje
    console.log({newCharacter}); // Muestra el nuevo personaje en la consola
    this.resetFields(); // Resetea los campos del formulario
  }

  resetFields(): void {
    this.name.set(''); // Resetea el nombre
    this.power.set(0); // Resetea el poder
  }

  // powerClasses = computed (() =>{
  //   return {
  //     'text-danger': true,
  //   };
  // });
}
