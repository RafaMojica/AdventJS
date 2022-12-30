function wrapping(gifts) {
  const wrapped = [];

  for (const gift of gifts) {
    let paper = "*".repeat(gift.length + 2);
    let regalo = `${paper}\n*${gift}*\n${paper}`;
    wrapped.push(regalo);
  }

  return wrapped;
}