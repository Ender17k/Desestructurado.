const deck = [5, 4, 7, 10];
const chosen = [5, 4];
const disregarded = [7, 10];

function swapNamedPile(piles) {
  const { chosen, disregarded } = piles;
  return { chosen: disregarded, disregarded: chosen }; // => { chosen: [7, 10], disregarded: [5, 4] }
}

swapNamedPile({ chosen, disregarded });
