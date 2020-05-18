export default class Character {
  constructor(attack, defence, health) {
    this.attack = attack;
    this.defence = defence;
    this.health = health;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }
}
