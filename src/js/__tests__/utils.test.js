import { orderByProps, extractSpecials } from '../utils.js';

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

    const result = extractSpecials(character);
    expect(result[0].description).toEqual('Описание недоступно');
    expect(result[1].description).toEqual('Описание недоступно');
  });

  test('should return an array of special attacks with provided description', () => {
    const character = {
      special: [
        { id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон' },
        { id: 9, name: 'Нокаутирующий удар', icon: 'http://...', description: 'Нокаутирующий удар оглушает противника' }
      ]
    };

    const result = extractSpecials(character);
    expect(result[0].description).toEqual('Двойной выстрел наносит двойной урон');
    expect(result[1].description).toEqual('Нокаутирующий удар оглушает противника');
  });

  test('should return an empty array if no special attacks are provided', () => {
    const character = {
      special: []
    };

    const result = extractSpecials(character);
    expect(result).toEqual([]);
  });
});
