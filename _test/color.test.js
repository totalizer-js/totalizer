import { isColor, color2rgba } from '../src/utils/color';

test('is color', () => {
  expect(isColor('#fff')).toBe(true);
  expect(isColor('#fd86ad')).toBe(true);
  expect(isColor('rgba(0,0,0,.2)')).toBe(true);
  expect(isColor('rgb(0 ,0,244)')).toBe(true);
  expect(isColor('rgba(0,0, 0, 1)')).toBe(true);
  expect(isColor('hsl(0, 10%, 20%)')).toBe(true);
  expect(isColor('hsla( 0, 10%, 90%, .5)')).toBe(true);
});

test('color to rgba', () => {
  expect(color2rgba('#ffffbd').join()).toBe('255,255,189,1');
  expect(color2rgba('#fbd').join()).toBe('255,187,221,1');
  expect(color2rgba(' #00f ').join()).toBe('0,0,255,1');
  expect(color2rgba(' hsl( 120, 100%, 75%)').join()).toBe('0.5,1,0.5,1');
  expect(color2rgba('rgb(10, 10, 244)').join()).toBe('10,10,244,1');
  expect(color2rgba('rgb( 10,10,244)').join()).toBe('10,10,244,1');
  expect(color2rgba('rgba(10,10,244,.1)').join()).toBe('10,10,244,0.1');
  expect(color2rgba(' rgba(0,10,244, 0) ').join()).toBe('0,10,244,0');
  expect(color2rgba('rgba( 10,10 , 244 , .1245 )').join()).toBe('10,10,244,0.1245');
});
