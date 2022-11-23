// libs
import { makeAutoObservable } from "mobx";

export interface IAnimal {
  name: string;
  energyLevel: number;
}

export class Animal implements IAnimal {
  name;
  energyLevel;

  constructor(name: string) {
    this.name = name;
    this.energyLevel = 100;
    makeAutoObservable(this);
  }

  reduceEnergy() {
    this.energyLevel -= 10;
  }

  get isHungry() {
    return this.energyLevel < 50;
  }
}
