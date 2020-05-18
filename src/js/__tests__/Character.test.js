/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Character from '../Character';

test('повышает уровень персонажа', () => {
  const character = new Character(50, 50, 50);
  character.levelUp();
  expect(character).toEqual({
    attack: 60, defence: 60, health: 100, level: 2,
  });
});

test('выдает ошибку', () => {
  const character = new Character(50, 50, 0);

  expect(() => { character.levelUp(); }).toThrow(Error, 'Нельзя повысить левел умершего');
});
