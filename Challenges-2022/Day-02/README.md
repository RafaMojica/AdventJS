<h2 align="center">Nobody wants to work overtime</h2>

A millionaire has bought a social network and it doesn't bring good news. He has announced that **every time a day of work is lost due to a holiday**, it will have to be compensated with **two extra hours on another day of that same year**.

Obviously the people who work in the company have not been amused at all and are **preparing a program that tells them the number of overtime hours they would work** in the year if the new rule were applied.

As it is office work, its working hours are **Monday to Friday**. So you only have to worry about the holidays that fall on those days.

Given a year and an array with the dates of the holidays, returns the number of overtime hours that would be done that year:

```sh
const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // MM/DD format

// 01/06 is January 6, Thursday. Account.
// 04/01 is April 1, a Friday. Account.
// 12/25 is December 25, a Sunday. It does not count.

countHours(year, holidays) // 2 day -> 4 hours of overtime per year
```

Things to keep in mind and tips:

- **The year can be a leap year. Do the checks you need to do this, if necessary.**
- **Although December 31 is a holiday, overtime will be done the same year and not the following year.**
- **The method `Date.getDay()` returns the day of the week of a date. 0 is Sunday, 1 is Monday, etc.**
