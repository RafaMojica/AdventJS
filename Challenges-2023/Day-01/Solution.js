// Solutions whit Object
function findFirstRepeated(gifts) {
  let dictionary = {};

  for (const giftId of gifts) {
    if (dictionary[giftId]) return giftId;
    dictionary[giftId] = "gift";
  }
  return -1;
}

// Solution whit Set
function findFirstRepeated(gifts) {
  let dictionary = new Set();

  for (const giftId of gifts) {
    if (dictionary.has(giftId)) return giftId;
    dictionary.add(giftId);
  }
  return -1;
}

// Solution whit find
function findFirstRepeated(gifts) {
  return gifts.find((gift, index) => gifts.indexOf(gift) !== index) ?? -1;
}

// Solution whit filter
function findFirstRepeated(gifts) {
  const repeated = gifts.filter((gift, i) => gifts.indexOf(gift) !== i);
  return repeated.length > 0 ? repeated[0] : -1;
}
