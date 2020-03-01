export default function Character(name, type) {
  // TODO: add logic here

  const typesArray = {
    Bowman: { attack: 25, defence: 25 },
    Swordsman: { attack: 40, defence: 10 },
    Magician: { attack: 10, defence: 40 },
    Undead: { attack: 25, defence: 25 },
    Zombie: { attack: 40, defence: 10 },
    Daemon: { attack: 10, defence: 40 },
  };

  if (!name || String(name).length < 2 || String(name).length > 10) {
    throw new Error('Name should be 2-10 symbols');
  }

  if (!type || !Object.prototype.hasOwnProperty.call(typesArray, type)) {
    throw new Error('Type should be one of [ Bowman, Swordsman, Magician, Daemon, Undead, Zombie ] characters');
  }

  this.name = String(name);
  this.type = type;
  this.health = 100;
  this.level = 1;
  this.attack = typesArray[type].attack;
  this.defence = typesArray[type].defence;
}

// Ваша функция-конструктор должна соответствовать следующим требованиям:

// name - строка, min - 2 символа, max - 10
// type - один из типов (строка): Bowman, Swordsman, Magician, Daemon, Undead, Zombie

// В случае, если передаются некорректные значения, функция конструктор должна выбрасывать ошибку
// (throw new Error(...)) и не давать возможность создавать объект.

// В вашей функции автоматически должны устанавливаться значения следующих полей:

// health: 100
// level: 1
// Атака/защита:
//   Bowman: 25/25
//   Swordsman: 40/10
//   Magician: 10/40
//   Undead: 25/25
//   Zombie: 40/10
//   Daemon: 10/40
