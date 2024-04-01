import Bowman from './Bowman.js';
import Swordsman from './Swordsman.js';
import Magician from './Magician.js';
import Daemon from './Daemon.js';
import Undead from './Undead.js';
import Zombie from './Zombie.js';

import { orderByProps } from './utils.js';

export {
  Bowman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie,
};

// Пример использования функции:
const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
const sortedProps = orderByProps(obj, ["name", "level"]);
console.log(sortedProps);
