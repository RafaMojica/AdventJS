function getIndexsForPalindrome(word) {
  if (word === word.split("").reverse().join("")) return [];

  for (let i = 0; i < word.length; i++) {
    for (let j = 1; j < word.length - i; j++) {
      let newWord = word.split("");

      [newWord[i], newWord[j + i]] = [newWord[j + i], newWord[i]];

      if (newWord.join("") === newWord.reverse().join("")) return [i, j + i];
    }
  }
  return null;
}
