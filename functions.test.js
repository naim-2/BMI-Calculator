const {getBMIStatus, calculateBMI, calculateAverageBMI} = require('./functions');

test('calculateBMI: 60/(180*180) = 18.52', () => {
  expect(calculateBMI(180, 60)).toBe('18.52');
});

test('getBMIStatus: BMI < 18.5 = Underweight', () => {
  expect(getBMIStatus(18.49)).toBe('Underweight');
});

test('getBMIStatus: 18.5 <= BMI < 25 = Normal weight', () => {
  expect(getBMIStatus(20)).toBe('Normal weight');
});

test('getBMIStatus: 25 <= BMI < 30 = Overweight', () => {
  expect(getBMIStatus(27)).toBe('Overweight');
});

test('getBMIStatus: BMI >= 30 = Obese', () => {
  expect(getBMIStatus(31)).toBe('Obese');
});

test('calculateAverageBMI: [30, 20, 15, 26] = 22.75', () => {
  expect(calculateAverageBMI([30, 20, 15, 26])).toBe('22.75');
});

test('calculateAverageBMI: [] = null', () => {
  expect(calculateAverageBMI([])).toBe(null);
});
