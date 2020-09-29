import { getData } from './getData';
import { getNewQuote } from './getNewQuote';

it('hey', (done) => {
  let s = { quote: 'hey', author: 'kevin' };
  let setS = ({ quote, author }) => {
    s.quote = quote;
    s.author = author;
  };
  expect(getNewQuote(getData, setS, s)).toBe(undefined);
  done();
});
