import asBool from '../src/index';

test('this should cover 100% of non-ignored branches', () => {
  expect(asBool('yes')).toBe(true);
  expect(asBool('no')).toBe(false);
});
