import React, { useState } from 'react';
import { fakeData } from '../data/fakeData';
import './quote-box.scss';

export function QuoteBox() {
  const [q, setQ] = useState({
    quote: '',
    author: '',
  });
  const [l, setL] = useState({ loading: true });

  const getNewQuote = () => {
    const rand = Math.floor(Math.random() * 6);
    let newQ = fakeData[rand];
    setQ({ ...q, quote: newQ.quote, author: newQ.author });
  };

  if (l.loading === true) {
    getNewQuote();
    setL({ ...l, loading: false });
  }

  return (
    <div id="quote-box">
      <div id="text">{q.quote}</div>
      <div id="author">- {q.author}</div>
      <button
        id="new-quote"
        onClick={() => {
          getNewQuote();
        }}
      >
        new quote
      </button>
    </div>
  );
}
