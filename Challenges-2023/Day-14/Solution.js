function maxGifts(houses) {
  const numHouses = houses.length;
  let numberOfGifts = [];

  numberOfGifts[0] = houses[0];
  numberOfGifts[1] = Math.max(houses[0], houses[1]);

  for (let i = 2; i < numHouses; i++) {
    numberOfGifts[i] = Math.max(
      numberOfGifts[i - 1],
      numberOfGifts[i - 2] + houses[i]
    );
  }

  return numberOfGifts[numHouses - 1] ? numberOfGifts[numHouses - 1] : 0;
}
