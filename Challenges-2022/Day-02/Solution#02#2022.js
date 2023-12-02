function countHours(year, holidays) {
  let hours = 0;

  holidays.forEach(date => {
    let day = new Date(`${date}/${year}`).getDay()
    if(day > 0 & day < 6) hours += 2
  });

  return hours;
}