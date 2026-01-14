import { UpperCasePipe } from "@angular/common";
import { Component, computed,  signal } from "@angular/core";

@Component({  
  selector: "hero-page",
  templateUrl: "./hero.html",
  imports: [UpperCasePipe],
})


export class Hero {
  title = 'Hero Page';
  nameSignal = signal('Ironman');
  ageSignal = signal(45);

  heroDescription = computed(() => {
    const description = `${this.nameSignal()} tiene ${this.ageSignal()} años`;
    return description;
  });

//   getHeroDescription(){
//     return `${this.nameSignal()} tiene ${this.ageSignal()} años`;
//   }

  capitalizeName = computed(() => {
    this.nameSignal().toUpperCase();
  })

  changeHero(){
    this.nameSignal.set('Spiderman');
    this.ageSignal.set(22);
  }
  resetForm(){
    this.nameSignal.set('Ironman');
    this.ageSignal.set(45);
  }
  changeAge(){
    this.ageSignal.set(60);
  }
  
}   
