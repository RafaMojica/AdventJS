function compile(code) {
  let count = 0;
  let i = 0;
  let returnPoint;

  while (i < code.length) {
    if (code[i] === "+") count++;
    if (code[i] === "-") count--;
    if (code[i] === "*") count = count * 2;
    if (code[i] === "%") returnPoint = i;
    if (code[i] === "¿" && count <= 0) i = code.indexOf("?");
    if (code[i] === "<" && returnPoint !== undefined) {
      code = code.slice(0, i) + " " + code.slice(i + 1);
      i = returnPoint;
    }

    i++;
  }

  return count;
}
