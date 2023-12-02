function wrapping(gifts) {
  const wrapped = [];

  for (const gift of gifts) {
    let paper = "*".repeat(gift.length + 2);
    let gif = `${paper}\n*${gift}*\n${paper}`;
    wrapped.push(gif);
  }

  return wrapped;
}
