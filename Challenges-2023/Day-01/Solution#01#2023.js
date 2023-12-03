function findFirstRepeated(gifts) {
  let dictionary = {};

  for (const giftId of gifts) {
    if (dictionary[giftId]) return giftId;
    dictionary[giftId] = "gift";
  }
  return -1;
}
