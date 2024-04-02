import Character from './Character.js';

export default class Bowman extends Character {
  constructor(name, type = 'Bowman', special = []) {
    super(name, type, special);
    this.attack = 25;
    this.defence = 25;
  }
}
