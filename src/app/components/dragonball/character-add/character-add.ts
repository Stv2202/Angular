import { Component, input, output, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dragon-character-add',
  templateUrl: './character-add.html',
})
export class CharacterAdd {
  name = signal(''); // Señal para almacenar el nombre del nuevo personaje
  power = signal(0); // Señal para almacenar el poder del nuevo personaje

  newCharacter = output<Character>();

  addCharacter(): void {
    if (!this.name() || this.power() <= 0 || !this.power()) {
      return; // Validación básica: no agregar si el nombre está vacío o el poder es menor o igual a 0
    }

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 10000), // Asigna un ID aleatorio
      name: this.name(), // Obtiene el nombre desde la señal
      powerLevel: this.power(), // Obtiene el poder desde la señal
    };
    //this.characters.update((characters) => [...characters, newCharacter]); // Actualiza la señal con el nuevo personaje
    // console.log({ newCharacter }); // Muestra el nuevo personaje en la consola
    this.newCharacter.emit(newCharacter); // Emite el nuevo personaje
    console.log({ newCharacter }); // Muestra el nuevo personaje en la consola
    this.resetFields(); // Resetea los campos del formulario
  }

  resetFields(): void {
    this.name.set(''); // Resetea el nombre
    this.power.set(0); // Resetea el poder
  }

}
