const reverseString = require('./reversestring');

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

test('String reverses', () => {
  expect(reverseString('hello')).toEqual('olleh');
});

test('String reverses', () => {
  expect(reverseString('ahay')).toEqual('yaha');
});

test('String reverses with uppercase', () => {
  expect(reverseString('Hello')).toEqual('olleh');
});

test('String reverses with uppercase', () => {
  expect(reverseString('Dello')).toEqual('olled');
});
