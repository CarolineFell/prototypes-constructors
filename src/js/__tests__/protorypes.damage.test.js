import Character from '../protorypes.damage';

// test('Should be damaged -> Dead', () => {
//   const checkDamage = new Character('CheckDamage', "Shurikener");
//   checkDamage.damage(180);
//   expect(checkDamage.health).toBe('The Character is dead');
// });

test('Should be damaged -> Damaged', () => {
  const checkDamage = new Character('CheckDamage', 'Shurikener');
  checkDamage.damage(10);
  expect(checkDamage.health).toBe(94);
});

test('Should be damaged -> No damage', () => {
  const checkDamage = new Character('CheckDamage', 'Shurikener');
  checkDamage.damage(0);
  expect(checkDamage.health).toBe(100);
});

// В качестве отправной точки используйте следующую реализацию:

// function Character(name, type) {
//     this.name = name;
//     this.type = type;
//     this.health = 100;
//     this.attack = 10;
//     this.defence = 40;
// }

// Реализуйте в прототипе Character функцию damage(points), которая меняет внутреннее состояние объекта
// (points - это урон, наносимый персонажу). Функция damage(points) ничего не возвращает и рассчитывает
// итоговое изменение жизни персонажа (health) по формуле: health -= points * (1 - defence / 100),
// учитывая, что значение health >= 0.