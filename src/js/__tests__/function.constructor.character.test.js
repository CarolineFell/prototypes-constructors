import Character from '../function.constructor.character';

test('Name should be 2-10 symbols -> <2', () => {
  expect(() => Character('C', 'Daemon')).toThrow('Name should be 2-10 symbols');
});

test('Name should be 2-10 symbols -> >10', () => {
  expect(() => Character('CheckingTheName', 'Daemon')).toThrow('Name should be 2-10 symbols');
});

test('Type should be one of [ Bowman, Swordsman, Magician, Daemon, Undead, Zombie ] characters -> Not from the typeArray', () => {
  expect(() => Character('CheckType', 'Shurikener')).toThrow('Type should be one of [ Bowman, Swordsman, Magician, Daemon, Undead, Zombie ] characters');
});

test('Type should be one of [ Bowman, Swordsman, Magician, Daemon, Undead, Zombie ] characters -> Error in type', () => {
  expect(() => Character('CheckType', 'wordsman')).toThrow('Type should be one of [ Bowman, Swordsman, Magician, Daemon, Undead, Zombie ] characters');
});

test('New Character', () => {
  const newOne = new Character('newOne', 'Magician');
  const expected = {
    name: 'newOne',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(newOne).toEqual(expected);
});

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
