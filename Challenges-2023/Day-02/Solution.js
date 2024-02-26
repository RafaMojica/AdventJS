// Solutions whit Filter
function manufacture(gifts, materials) {
  return gifts.filter((gift) => {
    const lettersArray = gift.split("");
    return lettersArray.every((letter) => materials.includes(letter));
  });
}

// Solutions whit Regex
function manufacture(gifts, materials) {
  const regex = new RegExp(`^[${materials}]+${"$"}`);
  return gifts.filter(regex.test.bind(regex));
}

function manufacture(gifts, materials) {
  const regex = new RegExp(`[${materials}]`);
  return gifts.filter((gift) => !gift.match(regex));
}
