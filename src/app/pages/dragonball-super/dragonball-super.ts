import { Component, signal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";
interface Character { // Definición de la interfaz Character
  id: number;
  name: string;
  powerLevel: number;
}

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterList, CharacterAdd],
  templateUrl: './dragonball-super.html',
})
export class DragonballSuper {

  name = signal(''); // Señal para almacenar el nombre del nuevo personaje
  power = signal(0); // Señal para almacenar el poder del nuevo personaje


  characters = signal<Character[]>([ // Señal para almacenar los personajes
    {id: 1, name: 'Goku', powerLevel: 9001},
    {id: 2, name: 'Vegeta', powerLevel: 8500},
  ]);

  addCharacter(character: Character){
    this.characters.update((characters) => [...characters, character]);
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
