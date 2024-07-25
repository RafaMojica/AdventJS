// Solution whit if
function autonomousDrive(store, movements) {
  let robotPosition = store.findIndex((element) => element.includes("!"));
  let robotIndex = store[robotPosition].indexOf("!");

  for (const movement of movements) {
    if (movement === "R" && store[robotPosition][robotIndex + 1] !== "*") {
      robotIndex++;
      store[robotPosition] = store[robotPosition].replace(/(?<=!)\./, "!");
      store[robotPosition] = store[robotPosition].replace(/!(?=!)/, ".");
    }

    if (movement === "L" && store[robotPosition][robotIndex - 1] !== "*") {
      robotIndex--;
      store[robotPosition] = store[robotPosition].replace(/\.(?=!)/, "!");
      store[robotPosition] = store[robotPosition].replace(/(?<=!)!/, ".");
    }

    if (
      movement === "D" &&
      store[robotPosition + 1] &&
      store[robotPosition + 1].slice(robotIndex, robotIndex + 1) !== "*"
    ) {
      store[robotPosition] = store[robotPosition].replace("!", ".");
      robotPosition++;
      store[robotPosition] =
        store[robotPosition].slice(0, robotIndex) +
        "!" +
        store[robotPosition].slice(robotIndex + 1);
    }

    if (
      movement === "U" &&
      store[robotPosition - 1] &&
      store[robotPosition - 1].slice(robotIndex, robotIndex + 1) !== "*"
    ) {
      store[robotPosition] = store[robotPosition].replace("!", ".");
      robotPosition--;
      store[robotPosition] =
        store[robotPosition].slice(0, robotIndex) +
        "!" +
        store[robotPosition].slice(robotIndex + 1);
    }
  }

  return store;
}

// Solution refactored
function autonomousDrive(store, movements) {
  let robotPosition = store.findIndex((element) => element.includes("!"));
  let robotIndex = store[robotPosition].indexOf("!");

  for (const movement of movements) {
    let newRobotPosition = robotPosition;
    let newRobotIndex = robotIndex;

    if (movement === "R") newRobotIndex++;
    if (movement === "L") newRobotIndex--;
    if (movement === "D") newRobotPosition++;
    if (movement === "U") newRobotPosition--;

    if (
      newRobotPosition >= 0 &&
      newRobotPosition < store.length &&
      newRobotIndex >= 0 &&
      newRobotIndex < store[newRobotPosition].length &&
      store[newRobotPosition][newRobotIndex] !== "*"
    ) {
      store[robotPosition] =
        store[robotPosition].substring(0, robotIndex) +
        "." +
        store[robotPosition].substring(robotIndex + 1);
      robotPosition = newRobotPosition;
      robotIndex = newRobotIndex;
      store[robotPosition] =
        store[robotPosition].substring(0, robotIndex) +
        "!" +
        store[robotPosition].substring(robotIndex + 1);
    }
  }

  return store;
}
