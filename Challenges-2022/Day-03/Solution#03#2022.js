function distributeGifts(packOfGifts, reindeers) {
  const weightGifts = packOfGifts.join("").length
  const reindeerWeight = reindeers.map((reindeer)=> reindeer.length*2)
  const weightMax = reindeerWeight.reduce((a,b)=> a + b, 0)

  const boxNumber = Math.floor(weightMax/weightGifts)

  return boxNumber;
}