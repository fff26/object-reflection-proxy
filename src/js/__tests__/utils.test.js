import { orderByProps } from '../utils.js';

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
  