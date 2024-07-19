function calculateTime(deliveries) {
  let timeSecond = 7 * 3600;

  for (const delivery of deliveries) {
    const [hours, minutes, seconds] = delivery.split(":");
    timeSecond += -hours * 3600 - minutes * 60 - seconds;
  }

  const sign = timeSecond > 0 ? "-" : "";
  timeSecond = Math.abs(timeSecond);

  let hours = Math.trunc(timeSecond / 3600);
  let minutes = Math.trunc(timeSecond / 60) % 60;
  let seconds = timeSecond % 60;

  hours = `${hours}`.padStart(2, "0");
  minutes = `${minutes}`.padStart(2, "0");
  seconds = `${seconds}`.padStart(2, "0");

  return `${sign}${hours}:${minutes}:${seconds}`;
}
