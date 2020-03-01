export default function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defence = 40;
}

Character.prototype = {
  damage(points) {
    // let healthy = this.health;
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    // } else if (healthy < (this.health = points * (1 - this.defence / 100))) {
    //   'The Character is dead';
    }
  },
};

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