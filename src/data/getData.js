export const getData = (fetch) =>
  fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then((response) => response.json())
    .then((data) => data);
