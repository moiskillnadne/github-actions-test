// src/calculator.test.ts
import { describe, it, expect } from 'vitest';
import { Calculator } from './calculator';

describe('Calculator', () => {
  const calculator = new Calculator();

  describe('add', () => {
    it('должен корректно складывать два положительных числа', () => {
      expect(calculator.add(2, 3)).toBe(6);
    });

    it('должен корректно складывать положительное и отрицательное число', () => {
      expect(calculator.add(5, -2)).toBe(3);
    });

    it('должен корректно складывать два отрицательных числа', () => {
      expect(calculator.add(-4, -5)).toBe(-9);
    });

    it('должен возвращать корректное число при сложении с нулем', () => {
      expect(calculator.add(7, 0)).toBe(7);
    });
  });

  describe('subtract', () => {
    it('должен корректно вычитать два положительных числа', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    it('должен корректно вычитать из меньшего числа большее', () => {
      expect(calculator.subtract(4, 10)).toBe(-6);
    });

    it('должен корректно вычитать отрицательные числа', () => {
      expect(calculator.subtract(-3, -7)).toBe(4);
    });

    it('должен возвращать то же число при вычитании нуля', () => {
      expect(calculator.subtract(5, 0)).toBe(5);
    });
  });

  describe('multiply', () => {
    it('должен корректно умножать два положительных числа', () => {
      expect(calculator.multiply(3, 4)).toBe(12);
    });

    it('должен корректно умножать положительное и отрицательное число', () => {
      expect(calculator.multiply(6, -2)).toBe(-12);
    });

    it('должен корректно умножать два отрицательных числа', () => {
      expect(calculator.multiply(-3, -5)).toBe(15);
    });

    it('должен возвращать ноль при умножении на ноль', () => {
      expect(calculator.multiply(9, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    it('должен корректно делить два положительных числа', () => {
      expect(calculator.divide(8, 2)).toBe(4);
    });

    it('должен корректно делить положительное на отрицательное число', () => {
      expect(calculator.divide(9, -3)).toBe(-3);
    });

    it('должен корректно делить два отрицательных числа', () => {
      expect(calculator.divide(-12, -4)).toBe(3);
    });

    it('должен выбрасывать ошибку при делении на ноль', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Деление на ноль невозможно');
    });
  });
});
