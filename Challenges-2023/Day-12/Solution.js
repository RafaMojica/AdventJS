// Solution with for if
function checkIsValidCopy(original, copy) {
  for (let i = 0; i < original.length; i++) {

    if(/\w/.test(original[i]) && !(copy[i] === original[i] || copy[i] === original[i].toLowerCase() || copy[i] === "#" || copy[i] === "+" || copy[i] === ":" || copy[i] === "." || copy[i] === " " )) return false

    if(original[i] === "#" && !(copy[i] === "#" || copy[i] === "+" || copy[i] === ":" || copy[i] === "." || copy[i] === " " )) return false

    if(original[i] === "+" && !(copy[i] === "+" || copy[i] === ":" || copy[i] === "." || copy[i] === " " )) return false

    if(original[i] === ":" && !(copy[i] === ":" || copy[i] === "." || copy[i] === " " )) return false

    if(original[i] === "." && !(copy[i] === "." || copy[i] === " " ) ) return false

    if(original[i] === " " && !(copy[i] === " ") ) return false
  }

  return true;
}

// Solution with for indexOf
function checkIsValidCopy(original, copy) {
  
  for (let i = 0; i < original.length; i++) {
    let char = original[i].match(/\w/g)

    const valid = `${char ? `${char}${char[0].toLowerCase()}` : ""}#+:. `

    if(valid.indexOf(copy[i]) < valid.indexOf(original[i])){
      return false
    }

  }

  return true;
}

