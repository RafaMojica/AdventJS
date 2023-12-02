function dryNumber(dry, numbers) {
  const codes = []

  for (let i = 1; i <= numbers; i++) {
    codes.push(i)
  }

  const inkLowCodes = codes.filter(n => n.toString().includes(dry))

  return inkLowCodes
}