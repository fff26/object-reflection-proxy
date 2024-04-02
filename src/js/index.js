import Bowman from './Bowman.js';
import Swordsman from './Swordsman.js';
import Magician from './Magician.js';
import Daemon from './Daemon.js';
import Undead from './Undead.js';
import Zombie from './Zombie.js';

import { orderByProps, extractSpecials } from './utils.js';

export {
  Bowman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie,
};

// Пример использования функций:
const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
const sortedProps = orderByProps(obj, ["name", "level"]);
console.log(sortedProps);

const bowman = new Bowman('Robin', 'Bowman', [
  {
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
    description: 'Двойной выстрел наносит двойной урон'
  },
  {
    id: 9,
    name: 'Нокаутирующий удар',
    icon: 'http://...'
  }
]);

console.log(extractSpecials(bowman));
