function cyberReindeer(road, time) {
  const snapshots = [road];
  let lastChar = ".";

  for (let index = 1; index < time; index++) {
    if (index === 5) road = road.replaceAll("|", "*");

    const matches = road.match(/S[\*\.]/);

    if (matches) {
      road = road.replace(matches[0], lastChar + "S");
      lastChar = matches[0][1];
    }

    snapshots.push(road);
  }

  return snapshots;
}
