function organizeGifts(gifts) {
  const matches = gifts.match(/\d+[a-z]/g);

  for (const match of matches) {
    let count = Number(match.slice(0, -1));
    const type = match.at(-1);

    const palets = Math.floor(count / 50);
    count -= palets * 50;

    const boxer = Math.floor(count / 10);
    count -= boxer * 10;

    gifts = gifts.replace(
      match,
      `${`[${type}]`.repeat(palets)}${`{${type}}`.repeat(boxer)}${
        count ? `(${type.repeat(count)})` : ""
      }`
    );
  }

  return gifts;
}