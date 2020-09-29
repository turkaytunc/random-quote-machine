import React, { useState, useEffect } from 'react';

export function Box() {
  const [q, setQ] = useState({
    quote: 'hello',
    author: 'Albert Einstein',
  });

  const getNewQuote = () => {};

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
