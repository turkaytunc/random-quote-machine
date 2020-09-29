import React, { useState } from 'react';
import { getData } from '../data/getData';
import { getNewQuote } from '../data/getNewQuote';
import './quote-box.scss';

export function QuoteBox() {
  const [q, setQ] = useState({
    quote:
      'If a cluttered desk is a sign of a cluttered mind, of what, then, is an empty desk a sign?',
    author: 'Albert Einstein',
  });

  return (
    <div id="quote-box">
      <div id="text">{q.quote}</div>
      <div id="author">- {q.author}</div>
      <button
        id="new-quote"
        onClick={() => {
          getNewQuote(getData, setQ, q);
        }}
      >
        New quote
      </button>
    </div>
  );
}
