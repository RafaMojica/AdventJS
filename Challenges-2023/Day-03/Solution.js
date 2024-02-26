// Solution with for loop
function findNaughtyStep(original, modified) {
  const mostWords = original.length >= modified.length ? original : modified;

  for (let i = 0; i < mostWords.length; i++) {
    if (original[i] !== modified[i]) return mostWords[i];
  }

  return "";
}

// Solution with sort
function findNaughtyStep(original, modified) {
  const [lessWords, mostWords] = [original, modified].sort(
    (a, b) => a.length - b.length
  );

  return [...mostWords].find((letter, i) => lessWords[i] != letter) ?? "";
}

// Solution with Set
function findNaughtyStep(original, modified) {
  let modifiedSteps = new Set(original.split(""));
  modified
    .split("")
    .forEach((char) => modifiedSteps.delete(char) || modifiedSteps.add(char));
  return Array.from(modifiedSteps)[0] ?? "";
}
