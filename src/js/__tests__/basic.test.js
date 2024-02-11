import sum from '../basic';
import healthSort from '../healthBarSort.js'

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});

test('test1', () => {
  let heroes = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ]
  let result = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ]
  expect(healthSort(heroes)).toEqual(result)
})
test('test2', () => {
  let heroes = [
    {name: 'лучник', health: 80}
  ]
  let result = [
    {name: 'лучник', health: 80}
  ]
  expect(healthSort(heroes)).toEqual(result)
})
test('test3', () => {
  let heroes = [
    {name: 'мечник', health: 30},
    {name: 'маг', health: 50},
    {name: 'лучник', health: 80},
    {name: 'друид', health: 80},
    {name: 'некромант', health: 80},
  ]
  let result = [
    {name: 'лучник', health: 80},
    {name: 'друид', health: 80},
    {name: 'некромант', health: 80},
    {name: 'маг', health: 50},
    {name: 'мечник', health: 30},
  ]
  expect(healthSort(heroes)).toEqual(result)
})
