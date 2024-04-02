import { orderByProps, extractSpecials } from '../utils.js';
import Character from '../Character.js';

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
      special: [],
    };
    expect(character).toEqual(correctCharacter);
  });

  test('should create a new character correct properties', () => {
    const character = new Character('Hero', 'Bowman');
    const correctCharacter = new Character('Hero', 'Bowman');
    correctCharacter.attack = undefined;
    correctCharacter.defence = undefined;
    expect(character).toEqual(correctCharacter);
  });
});

describe('orderByProps', () => {
  test('should sort properties by the given order and then alphabetically', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    const order = ["name", "level"];
    const expected = [
      { key: "name", value: "мечник" },
      { key: "level", value: 2 },
      { key: "attack", value: 80 },
      { key: "defence", value: 40 },
      { key: "health", value: 10 }
    ];
    const result = orderByProps(obj, order);
    expect(result).toEqual(expected);
  });

  test('should sort all properties alphabetically if no order is given', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    const expected = [
      { key: "attack", value: 80 },
      { key: "defence", value: 40 },
      { key: "health", value: 10 },
      { key: "level", value: 2 },
      { key: "name", value: "мечник" }
    ];
    const result = orderByProps(obj, []);
    expect(result).toEqual(expected);
  });

  test('should handle cases when order array contains properties not present in the object', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80 };
    const order = ["name", "level", "magic"];
    const expected = [
      { key: "name", value: "мечник" },
      { key: "level", value: 2 },
      { key: "attack", value: 80 },
      { key: "health", value: 10 }
    ];
    const result = orderByProps(obj, order);
    expect(result).toEqual(expected);
  });
});

describe('extractSpecials', () => {
  test('should return an array of special attacks with default description if not provided', () => {
    const character = {
      special: [
        { id: 8, name: 'Двойной выстрел', icon: 'http://...' },
        { id: 9, name: 'Нокаутирующий удар', icon: 'http://...' }
      ]
    };

    const correctResult = [
      { id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Описание недоступно' },
      { id: 9, name: 'Нокаутирующий удар', icon: 'http://...', description: 'Описание недоступно' }
    ];

    expect(extractSpecials(character)).toMatchObject(correctResult);
  });

  test('should return an array of special attacks with provided description', () => {
    const character = {
      special: [
        { id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон' },
        { id: 9, name: 'Нокаутирующий удар', icon: 'http://...', description: 'Нокаутирующий удар оглушает противника' }
      ]
    };

    const correctResult = [
      { id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон' },
      { id: 9, name: 'Нокаутирующий удар', icon: 'http://...', description: 'Нокаутирующий удар оглушает противника' }
    ];

    expect(extractSpecials(character)).toMatchObject(correctResult);
  });

  test('should return an empty array if no special attacks are provided', () => {
    const character = {
      special: []
    };

    expect(extractSpecials(character)).toEqual([]);
  });
});
