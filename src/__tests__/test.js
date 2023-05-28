import orderByProps from '../sort';

test('test', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const result = orderByProps(obj, ['name', 'level']);
  expect(result).toEqual([
    { name: 'мечник' }, // порядок взят из массива с ключами
    { level: 2 }, // порядок взят из массива с ключами
    { attack: 80 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
    { defence: 40 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
    { health: 10 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
  ]);
});
