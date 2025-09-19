const deck = [2, 6, 10];

function shiftThreeCardsAround(deck) {
  const [first, second, third] = deck;
  return [second, third, first]; // => [6, 10, 2]
}

shiftThreeCardsAround(deck);
