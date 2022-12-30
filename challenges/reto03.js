function distributeGifts(packOfGifts, reindeers) {
  const weightgifts = packOfGifts.join("").length
  const reindeerWeight = reindeers.map((reindeer)=> reindeer.length*2)
  const weightMax = reindeerWeight.reduce((a,b)=> a + b, 0)

  const boxNumber = Math.floor(weightMax/weightgifts)

  return boxNumber;
}