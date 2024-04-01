export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Name must be a string with length from 2 to 10 characters');
    }

    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!types.includes(type)) {
      throw new Error('Type must be one of the following: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Cannot level up: character is dead');
    }

    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (typeof points !== 'number') {
      throw new Error('Points must be a number');
    }

    const defence = this.defence || 0;
    const damagePoints = points * (1 - defence / 100);
    this.health -= damagePoints;

    if (this.health < 0) {
      this.health = 0;
    }
  }
}
