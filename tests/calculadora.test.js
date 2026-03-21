import { expect, test } from 'vitest';
import { sumar, restar } from '../src/calculadora';

test('Debe sumar 2 + 3 y retornar 5', () => {
  expect(sumar(2, 3)).toBe(5);
});

test('Debe restar 5 - 3 y retornar 2', () => {
  expect(restar(5, 3)).toBe(2);
});
