// Solutions whit For
function createChristmasTree(ornaments, height) {
  let tree = "";
  let nextOrnamentsIndex = 0;

  for (let i = 1; i <= height; i++) {
    tree += " ".repeat(height - i);

    for (let j = 1; j <= i; j++) {
      tree += ornaments[nextOrnamentsIndex];

      if (j !== i) {
        tree += " ";
      }

      nextOrnamentsIndex = ornaments[nextOrnamentsIndex + 1]
        ? nextOrnamentsIndex + 1
        : 0;
    }

    tree += "\n";
  }

  tree += " ".repeat(height - 1) + "|\n";

  return tree;
}

// Solutions whit Array.from and for
function createChristmasTree(ornaments, height) {
  let tree = "";
  let index = 0;

  for (let i = 0; i < height; i++) {
    const ornamentsArray = Array.from(
      { length: i + 1 },
      () => ornaments[index++ % ornaments.length]
    );

    tree += `${ornamentsArray.join(" ").padStart(height + i)}\n`;
  }

  return `${tree}${"|".padStart(height)}\n`;
}
