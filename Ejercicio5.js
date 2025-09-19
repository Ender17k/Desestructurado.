const deck = [5, 4, 7, 10];
const chosen = [5, 4];
const disregarded = [7, 10];

function pickNamedPile(piles) {
  const { chosen } = piles;
  return chosen; // => [5, 4]
}

pickNamedPile({ chosen, disregarded });
