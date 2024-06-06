// Solutions whit Regex
function maxDistance(movements) {
  const matchesRight = movements.match(/>/g);
  const matchesLeft = movements.match(/</g);
  const matchesNeutral = movements.match(/\*/g);

  const right = matchesRight ? matchesRight.length : 0;
  const left = matchesLeft ? matchesLeft.length : 0;
  const neutral = matchesNeutral ? matchesNeutral.length : 0;

  return right >= left ? right + neutral - left : left + neutral - right;
}

// Solutions whit for
function maxDistance(movements) {
  let distance = 0;
  let wildcard = 0;

  for (const char of movements) {
    if (char === "<") distance++;
    if (char === ">") distance--;
    if (char === "*") wildcard++;
  }

  return Math.abs(distance) + wildcard;
}
