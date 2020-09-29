import { getData } from './getData';

test('should be array', () => {
  return getData(fetch).then((data) => {
    expect(data).toBeInstanceOf(Array);
  });
});
