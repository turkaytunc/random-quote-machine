export const getNewQuote = (getData, setState, oldState) => {
  getData(fetch).then((item) => {
    setState({ ...oldState, quote: item[0].quote, author: item[0].character });
  });
};
