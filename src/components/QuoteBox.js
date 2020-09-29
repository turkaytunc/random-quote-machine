import React, { useState, useEffect } from 'react';
import { fakeData } from '../data/fakeData';

export function QuoteBox() {
  const [q, setQ] = useState({
    quote: 'hello',
    author: 'Albert Einstein',
  });

  const getNewQuote = () => {
    const rand = Math.floor(Math.random() * 6);
    let newQ = fakeData[rand];
    setQ({ ...q, quote: newQ.quote, author: newQ.author });
  };

  useEffect(() => {
    getNewQuote();
  }, []);

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
      <a id="tweet-quote" href="twitter.com/intent/tweet">
        tweet
      </a>
    </div>
  );
}
