import Character from '../Character';

describe('Character', () => {
  test('should create a new character with correct properties', () => {
    const character = new Character('Hero', 'Bowman');
    const correctCharacter = {
      name: 'Hero',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: undefined,
      defence: undefined,
    };
    expect(character).toEqual(correctCharacter);
  });
});


  test('should throw an error if name is not a string', () => {
    expect(() => new Character(123, 'Bowman')).toThrow('Name must be a string with length from 2 to 10 characters');
  });

  test('should throw an error if name length is less than 2 or more than 10', () => {
    expect(() => new Character('H', 'Bowman')).toThrow('Name must be a string with length from 2 to 10 characters');
    expect(() => new Character('LongNameHero', 'Bowman')).toThrow('Name must be a string with length from 2 to 10 characters');
  });

  test('should throw an error if type is incorrect', () => {
    expect(() => new Character('Hero', 'Unknown')).toThrow('Type must be one of the following: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
  });

  test('should correctly level up character', () => {
    const character = new Character('Hero', 'Bowman');
    character.levelUp();
    expect(character.level).toBe(2);
    expect(character.health).toBe(100);
  });

  test('should throw an error when trying to level up dead character', () => {
    const character = new Character('Hero', 'Bowman');
    character.health = 0;
    expect(() => character.levelUp()).toThrow('Cannot level up: character is dead');
  });

  test('should correctly apply damage to character', () => {
    const character = new Character('Hero', 'Bowman');
    character.damage(10);
    expect(character.health).toBeCloseTo(90);
  });

  test('should not have health less than 0', () => {
    const character = new Character('Hero', 'Bowman');
    character.damage(200);
    expect(character.health).toBe(0);
  });

  test('should throw an error if damage points are not a number', () => {
    const character = new Character('John', 'Bowman');
    expect(() => character.damage('not-a-number')).toThrow('Points must be a number');
  });
  
});
