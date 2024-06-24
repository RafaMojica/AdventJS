function adjustLights(lights) {
  function checkLights(lights) {
    let count = 0;

    for (let i = 1; i < lights.length; i++) {
      if (lights[i] === lights[i - 1]) {
        count++;
        lights[i] = lights[i] === "🟢" ? "🔴" : "🟢";
      }
    }

    return count;
  }

  return Math.min(checkLights([...lights]), checkLights([...lights].reverse()));
}
