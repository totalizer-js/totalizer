import eases from '../src/utils/eases';

test('default eases', () => {
  expect(eases.easeOutElastic(1, 0.5)(0.5).toFixed(5)).toBe('0.96875');
});
