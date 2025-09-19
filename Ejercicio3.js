const deck = [10, 7];

function swapTwoCards(deck) {
  let [first, second] = deck;
  return [second, first]; // => [7, 10]
}

swapTwoCards(deck);
